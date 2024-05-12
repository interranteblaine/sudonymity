import { App } from 'aws-cdk-lib';
import { DynamoStack } from './stacks/dynamo-stack';
import { S3Stack } from './stacks/s3-stack';
import { ServiceStack } from './stacks/service-stack';

const app = new App();
const dynamoStack = new DynamoStack(app, 'DynamoStack');
const s3Stack = new S3Stack(app, 'S3Stack');
new ServiceStack(app, 'ServiceStack', { dynamoStack, s3Stack });
