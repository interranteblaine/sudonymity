# cloud-infra

This library was generated with [Nx](https://nx.dev).

## Building

Run `nx build cloud-infra` to build the library.

Run `nx run cloud-infra:synth` to synthesize the CloudFormation Template.

Run `nx run cloud-infra:deploy <Stack1> <Stack2>` or `nx run cloud-infra:deploy --all` to deploy AWS stacks.

Run `nx run cloud-infra:destroy <Stack1> <Stack2>` or `nx run cloud-infra:destroy --all` to destroy deployed AWS stacks.

Run `nx run cloud-infra:bootstrap` to set up the initial resources required for managing your CDK deployments in AWS. This is necessary before your first deployment to prepare the AWS environment.
