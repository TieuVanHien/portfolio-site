import AWS from 'aws-sdk';

export const handler = async () => {
  const s3 = new AWS.S3({
    region: 'us-west-2',
    endpoint: 'portfolio-site01.s3.amazonaws.com'
  });

  try {
    const params = {
      Bucket: 'portfolio-site01',
      Prefix: 'contact/'
    };
    const objects = await s3.listObjectsV2(params).promise();
    const urls = objects?.Contents?.map((content: any) =>
      s3.getSignedUrl('getObject', {
        Bucket: 'portfolio-site01',
        Key: content.Key
      })
    );
    return {
      statusCode: 200,
      body: JSON.stringify({ urls })
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error retrieving images' })
    };
  }
};
