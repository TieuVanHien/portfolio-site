import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: 'process.env.AWS_ACCESS_KEY_ID',
  secretAccessKey: 'process.env.AWS_SECRET_ACCESS_KEY'
});

export const handler = async () => {
  const s3 = new AWS.S3({
    region: 'us-west-2',
    endpoint: 'techstack01.s3.amazonaws.com'
  });

  try {
    // fetch all images
    const params: AWS.S3.ListObjectsV2Request = {
      Bucket: 'techstack01',
      Prefix: 'skill/'
    };

    const { Contents } = await s3.listObjectsV2(params).promise();
    if (!Contents) {
      throw new Error('No contents found in S3 bucket');
    }
    const urls = Contents.map(({}) =>
      s3.getSignedUrlPromise('getObject', { Bucket: params.Bucket })
    );
    const images = await Promise.all(urls);
    return {
      statusCode: 200,
      body: JSON.stringify({ images })
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error retrieving images' })
    };
  }
};
