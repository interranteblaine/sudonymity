import { App, Stack, RemovalPolicy, StackProps } from 'aws-cdk-lib';
import { AttributeType, Table } from 'aws-cdk-lib/aws-dynamodb';

export class DynamoStack extends Stack {
  public readonly table: Table;

  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);

    this.table = new Table(this, 'items', {
      partitionKey: {
        name: 'itemId',
        type: AttributeType.STRING,
      },
      tableName: 'items',

      /**
       *  The default removal policy is RETAIN, which means that cdk destroy will not attempt to delete
       * the new table, and it will remain in your account until manually deleted. By setting the policy to
       * DESTROY, cdk destroy will delete the table (even if it has data in it)
       */
      removalPolicy: RemovalPolicy.DESTROY, // NOT recommended for production code
    });
  }
}
