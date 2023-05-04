import { S3 } from 'aws-sdk';

exports.handler = async () => {
  const s3 = new S3({
    region: 'us-west-2'
  });

  try {
    const params = {
      Bucket: 'techstack01',
      Key: 'logo.png'
    };

    const data = await s3.getObject(params).promise();
    if (!data.Body) {
      throw new Error('Body is undefined');
    }
    const image = data.Body.toString('base64');

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'image/png',
        'Content-Length': image.length.toString()
      },
      isBase64Encoded: true,
      body: image
    };
  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error retrieving image' })
    };
  }
};
