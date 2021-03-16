import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';

export default async function (host: Tree, schema: any) {
  await libraryGenerator(host, {
    name: `util-${schema.name}`,
    linter: 'tslint',
    directory: schema.directory,
    tags: `scope:${schema.directory}, type:util`
  });
  await formatFiles(host);

  return () => {
    installPackagesTask(host);
  };
}
