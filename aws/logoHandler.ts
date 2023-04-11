const AWS = require('aws-sdk');

exports.handler = async () => {
  const s3 = new AWS.S3({
    region: 'us-west-2',
    endpoint: 'portfolio-site01.s3.amazonaws.com'
  });

  try {
    //fetch logo image
    const params = {
      Bucket: 'portfolio-site01',
      Key: 'logo.png'
    };
    const url = await s3.getSignedUrlPromise('getObject', params);
    return {
      statusCode: 200,
      body: JSON.stringify({ url })
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error retrieving image' })
    };
  }
};
