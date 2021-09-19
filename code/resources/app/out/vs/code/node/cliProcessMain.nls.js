/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/define("vs/code/node/cliProcessMain.nls",{"vs/base/common/date":["in {0}","now","{0} sec ago","{0} secs ago","{0} sec","{0} secs","{0} min ago","{0} mins ago","{0} min","{0} mins","{0} hr ago","{0} hrs ago","{0} hr","{0} hrs","{0} day ago","{0} days ago","{0} day","{0} days","{0} wk ago","{0} wks ago","{0} wk","{0} wks","{0} mo ago","{0} mos ago","{0} mo","{0} mos","{0} yr ago","{0} yrs ago","{0} yr","{0} yrs"],"vs/base/common/errorMessage":["{0}: {1}","A system error occurred ({0})","An unknown error occurred. Please consult the log for more details.","An unknown error occurred. Please consult the log for more details.","{0} ({1} errors in total)","An unknown error occurred. Please consult the log for more details."],"vs/base/node/processes":["Can't execute a shell command on a UNC drive."],"vs/base/node/zip":["Error extracting {0}. Invalid file.","Incomplete. Found {0} of {1} entries","{0} not found inside zip."],"vs/platform/configuration/common/configurationRegistry":["Default Language Configuration Overrides","Configure settings to be overridden for {0} language.","Configure editor settings to be overridden for a language.","This setting does not support per-language configuration.","Cannot register an empty property","Cannot register '{0}'. This matches property pattern '\\\\[.*\\\\]$' for describing language specific editor settings. Use 'configurationDefaults' contribution.","Cannot register '{0}'. This property is already registered."],"vs/platform/extensionManagement/common/abstractExtensionManagementService":["Marketplace is not enabled","Marketplace is not enabled","Only Marketplace Extensions can be reinstalled","Can't install '{0}' extension since it was reported to be problematic.","Can't install '{0}' extension because it is not compatible with the current version of VS Code (version {1}).","Cannot uninstall '{0}' extension. '{1}' extension depends on this.","Cannot uninstall '{0}' extension. '{1}' and '{2}' extensions depend on this.","Cannot uninstall '{0}' extension. '{1}', '{2}' and other extension depend on this.","Cannot uninstall '{0}' extension . It includes uninstalling '{1}' extension and '{2}' extension depends on this.","Cannot uninstall '{0}' extension. It includes uninstalling '{1}' extension and '{2}' and '{3}' extensions depend on this.","Cannot uninstall '{0}' extension. It includes uninstalling '{1}' extension and '{2}', '{3}' and other extensions depend on this."],"vs/platform/extensionManagement/common/extensionManagement":["Extensions","Preferences"],"vs/platform/extensionManagement/common/extensionManagementCLIService":["Extension '{0}' not found.","Make sure you use the full extension ID, including the publisher, e.g.: {0}","Extensions installed on {0}:","Installing extensions on {0}...","Installing extensions...","Extension '{0}' v{1} is already installed. Use '--force' option to update to latest version or provide '@<version>' to install a specific version, for example: '{2}@1.2.3'.","Extension '{0}' is already installed.","Failed Installing Extensions: {0}","Extension '{0}' was successfully installed.","Cancelled installing extension '{0}'.","Extension '{0}' is already installed.","Updating the extension '{0}' to the version {1}","Installing builtin extension '{0}' v{1}...","Installing builtin extension '{0}'...","Installing extension '{0}' v{1}...","Installing extension '{0}'...","Extension '{0}' v{1} was successfully installed.","Cancelled installing extension '{0}'.","A newer version of extension '{0}' v{1} is already installed. Use '--force' option to downgrade to older version.","Extension '{0}' is a Built-in extension and cannot be uninstalled","Extension '{0}' is marked as a Built-in extension by user. Please use '--force' option to uninstall it.","Uninstalling {0}...","Extension '{0}' was successfully uninstalled from {1}!","Extension '{0}' was successfully uninstalled!","Extension '{0}' is not installed on {1}.","Extension '{0}' is not installed."],"vs/platform/extensionManagement/node/extensionManagementService":["Unable to install extension '{0}' as it is not compatible with VS Code '{1}'.","Unable to install the extension. Please Quit and Start VS Code before reinstalling.","Unable to install the extension. Please Exit and Start VS Code before reinstalling.","Please restart VS Code before reinstalling {0}.","Please restart VS Code before reinstalling {0}.","Extension '{0}' is not installed.","Error while removing the extension: {0}. Please Quit and Start VS Code before trying again."],"vs/platform/extensionManagement/node/extensionManagementUtil":["VSIX invalid: package.json is not a JSON file."],"vs/platform/extensionManagement/node/extensionsScanner":["Unable to delete the existing folder '{0}' while installing the extension '{1}'. Please delete the folder manually and try again","Cannot read the extension from {0}","Cannot read the extension from {0}","Unknown error while renaming {0} to {1}","Extension invalid: package.json is not a JSON file."],"vs/platform/extensions/common/extensionValidator":["Could not parse `engines.vscode` value {0}. Please use, for example: ^1.22.0, ^1.22.x, etc.","Version specified in `engines.vscode` ({0}) is not specific enough. For vscode versions before 1.0.0, please define at a minimum the major and minor desired version. E.g. ^0.10.0, 0.10.x, 0.11.0, etc.","Version specified in `engines.vscode` ({0}) is not specific enough. For vscode versions after 1.0.0, please define at a minimum the major desired version. E.g. ^1.10.0, 1.10.x, 1.x.x, 2.x.x, etc.","Extension is not compatible with Code {0}. Extension requires: {1}."],"vs/platform/files/common/fileService":["Unable to resolve filesystem provider with relative file path '{0}'","No file system provider found for resource '{0}'","Unable to resolve non-existing file '{0}'","Unable to create file '{0}' that already exists when overwrite flag is not set","Unable to write file '{0}' ({1})","Unable to unlock file '{0}' because provider does not support it.","Unable to write file '{0}' that is actually a directory","File Modified Since","Unable to read file '{0}' ({1})","Unable to read file '{0}' ({1})","Unable to read file '{0}' ({1})","Unable to read file '{0}' that is actually a directory","File not modified since","Unable to read file '{0}' that is too large to open","Unable to copy when source '{0}' is same as target '{1}' with different path case on a case insensitive file system","Unable to move/copy when source '{0}' is parent of target '{1}'.","Unable to move/copy '{0}' because target '{1}' already exists at destination.","Unable to move/copy '{0}' into '{1}' since a file would replace the folder it is contained in.","Unable to create folder '{0}' that already exists but is not a directory","Unable to delete file '{0}' via trash because provider does not support it.","Unable to delete non-existing file '{0}'","Unable to delete non-empty folder '{0}'.","Unable to modify readonly file '{0}'","Unable to modify readonly file '{0}'"],"vs/platform/files/common/io":["To open a file of this size, you need to restart and allow {0} to use more memory","File is too large to open"],"vs/platform/files/node/diskFileSystemProvider":["File already exists","File does not exist","Unable to move '{0}' into '{1}' ({2}).","Unable to copy '{0}' into '{1}' ({2}).","'File cannot be copied to same path with different path case","File at target already exists"],"vs/platform/request/common/request":["HTTP","The proxy setting to use. If not set, will be inherited from the `http_proxy` and `https_proxy` environment variables.","Controls whether the proxy server certificate should be verified against the list of supplied CAs.","The value to send as the `Proxy-Authorization` header for every network request.","Disable proxy support for extensions.","Enable proxy support for extensions.","Enable proxy support for extensions, fall back to request options, when no proxy found.","Enable proxy support for extensions, override request options.","Use the proxy support for extensions.","Controls whether CA certificates should be loaded from the OS. (On Windows and macOS, a reload of the window is required after turning this off.)"],"vs/platform/telemetry/common/telemetryService":["Telemetry","Enable diagnostic data to be collected. This helps us to better understand how {0} is performing and where improvements need to be made.","Enable diagnostic data to be collected. This helps us to better understand how {0} is performing and where improvements need to be made. [Read more]({1}) about what we collect and our privacy statement."]});

//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/83bd43bc519d15e50c4272c6cf5c1479df196a4d/core/vs/code/node/cliProcessMain.nls.js.map
