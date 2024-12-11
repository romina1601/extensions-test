import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { ISettingRegistry } from '@jupyterlab/settingregistry';

/**
 * Initialization data for the extensionstest extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'extensionstest:plugin',
  description: 'A JupyterLab extension.',
  autoStart: true,
  optional: [ISettingRegistry],
  activate: (app: JupyterFrontEnd, settingRegistry: ISettingRegistry | null) => {
    console.log('JupyterLab extension extensionstest is activated!');

    if (settingRegistry) {
      settingRegistry
        .load(plugin.id)
        .then(settings => {
          console.log('extensionstest settings loaded:', settings.composite);
        })
        .catch(reason => {
          console.error('Failed to load settings for extensionstest.', reason);
        });
    }
  }
};

export default plugin;
