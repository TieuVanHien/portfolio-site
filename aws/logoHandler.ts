const AWS = require('aws-sdk');

exports.handler = async () => {
  const s3 = new AWS.S3({
    region: 'us-west-2',
    endpoint: 'portfolio-site01.s3.amazonaws.com'
  });

  try {
    //fetch all images
    const params = {
      Bucket: 'portfolio-site01'
    };

    const { Contents } = await s3.listObjectsV2(params).promise();
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
