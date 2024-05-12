import { App, Stack, StackProps } from 'aws-cdk-lib';
import { DynamoStack } from './dynamo-stack';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { join } from 'path';
import { S3Stack } from './s3-stack';

interface ServiceStackProps extends StackProps {
  dynamoStack: DynamoStack;
  s3Stack: S3Stack;
}

export class ServiceStack extends Stack {
  //   public readonly fns: Map<string, string>;

  constructor(scope: App, id: string, props?: ServiceStackProps) {
    super(scope, id, props);

    // const lambdaFunction = new NodejsFunction(this, 'MyLambdaFunction', {
    //   runtime: Runtime.NODEJS_LATEST,
    //   entry: join(__dirname, 'path/to/lambda/handler.ts'), // Path to your Lambda handler
    //   handler: 'handler',
    //   environment: {
    //     TABLE_NAME: props.dynamoStack.table.tableName,
    //     BUCKET_NAME: props.s3Stack.bucket.bucketName,
    //   },
    // });

    // // Grant the lambda function permissions to use the DynamoDB table and S3 bucket
    // props.dynamoStack.table.grantReadWriteData(lambdaFunction);
    // props.s3Stack.bucket.grantReadWrite(lambdaFunction);
  }
}
