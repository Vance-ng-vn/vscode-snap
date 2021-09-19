/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/define("vs/code/electron-browser/sharedProcess/sharedProcessMain.nls",{"vs/base/common/date":["in {0}","now","{0} sec ago","{0} secs ago","{0} sec","{0} secs","{0} min ago","{0} mins ago","{0} min","{0} mins","{0} hr ago","{0} hrs ago","{0} hr","{0} hrs","{0} day ago","{0} days ago","{0} day","{0} days","{0} wk ago","{0} wks ago","{0} wk","{0} wks","{0} mo ago","{0} mos ago","{0} mo","{0} mos","{0} yr ago","{0} yrs ago","{0} yr","{0} yrs"],"vs/base/common/errorMessage":["{0}: {1}","A system error occurred ({0})","An unknown error occurred. Please consult the log for more details.","An unknown error occurred. Please consult the log for more details.","{0} ({1} errors in total)","An unknown error occurred. Please consult the log for more details."],"vs/base/node/processes":["Can't execute a shell command on a UNC drive."],"vs/base/node/zip":["Error extracting {0}. Invalid file.","Incomplete. Found {0} of {1} entries","{0} not found inside zip."],"vs/platform/configuration/common/configurationRegistry":["Default Language Configuration Overrides","Configure settings to be overridden for {0} language.","Configure editor settings to be overridden for a language.","This setting does not support per-language configuration.","Cannot register an empty property","Cannot register '{0}'. This matches property pattern '\\\\[.*\\\\]$' for describing language specific editor settings. Use 'configurationDefaults' contribution.","Cannot register '{0}'. This property is already registered."],"vs/platform/environment/node/argv":["Options","Extensions Management","Troubleshooting","Compare two files with each other.","Add folder(s) to the last active window.","Open a file at the path on the specified line and character position.","Force to open a new window.","Force to open a file or folder in an already opened window.","Wait for the files to be closed before returning.","The locale to use (e.g. en-US or zh-TW).","Specifies the directory that user data is kept in. Can be used to open multiple distinct instances of Code.","Print usage.","Set the root path for extensions.","List the installed extensions.","Show versions of installed extensions, when using --list-extensions.","Filters installed extensions by provided category, when using --list-extensions.","Installs or updates the extension. The identifier of an extension is always `${publisher}.${name}`. Use `--force` argument to update to latest version. To install a specific version provide `@${version}`. For example: 'vscode.csharp@1.2.3'.","Uninstalls an extension.","Enables proposed API features for extensions. Can receive one or more extension IDs to enable individually.","Print version.","Print verbose output (implies --wait).","Log level to use. Default is 'info'. Allowed values are 'critical', 'error', 'warn', 'info', 'debug', 'trace', 'off'.","Print process usage and diagnostics information.","Run CPU profiler during startup.","Disable all installed extensions.","Disable an extension.","Turn sync on or off.","Allow debugging and profiling of extensions. Check the developer tools for the connection URI.","Allow debugging and profiling of extensions with the extension host being paused after start. Check the developer tools for the connection URI.","Disable GPU hardware acceleration.","Max memory size for a window (in Mbytes).","Shows all telemetry events which VS code collects.","Usage","options","paths","To read output from another program, append '-' (e.g. 'echo Hello World | {0} -')","To read from stdin, append '-' (e.g. 'ps aux | grep code | {0} -')","Unknown version","Unknown commit"],"vs/platform/environment/node/argvHelper":["Warning: '{0}' is not in the list of known options, but still passed to Electron/Chromium.","Option '{0}' is defined more than once. Using value '{1}.'","Arguments in `--goto` mode should be in the format of `FILE(:LINE(:CHARACTER))`."],"vs/platform/extensionManagement/common/abstractExtensionManagementService":["Marketplace is not enabled","Marketplace is not enabled","Only Marketplace Extensions can be reinstalled","Can't install '{0}' extension since it was reported to be problematic.","Can't install '{0}' extension because it is not compatible with the current version of VS Code (version {1}).","Cannot uninstall '{0}' extension. '{1}' extension depends on this.","Cannot uninstall '{0}' extension. '{1}' and '{2}' extensions depend on this.","Cannot uninstall '{0}' extension. '{1}', '{2}' and other extension depend on this.","Cannot uninstall '{0}' extension . It includes uninstalling '{1}' extension and '{2}' extension depends on this.","Cannot uninstall '{0}' extension. It includes uninstalling '{1}' extension and '{2}' and '{3}' extensions depend on this.","Cannot uninstall '{0}' extension. It includes uninstalling '{1}' extension and '{2}', '{3}' and other extensions depend on this."],"vs/platform/extensionManagement/common/extensionManagement":["Extensions","Preferences"],"vs/platform/extensionManagement/electron-sandbox/extensionTipsService":["You have {0} installed on your system. Do you want to install the recommended extensions for it?"],"vs/platform/extensionManagement/node/extensionManagementService":["Unable to install extension '{0}' as it is not compatible with VS Code '{1}'.","Unable to install the extension. Please Quit and Start VS Code before reinstalling.","Unable to install the extension. Please Exit and Start VS Code before reinstalling.","Please restart VS Code before reinstalling {0}.","Please restart VS Code before reinstalling {0}.","Extension '{0}' is not installed.","Error while removing the extension: {0}. Please Quit and Start VS Code before trying again."],"vs/platform/extensionManagement/node/extensionManagementUtil":["VSIX invalid: package.json is not a JSON file."],"vs/platform/extensionManagement/node/extensionsScanner":["Unable to delete the existing folder '{0}' while installing the extension '{1}'. Please delete the folder manually and try again","Cannot read the extension from {0}","Cannot read the extension from {0}","Unknown error while renaming {0} to {1}","Extension invalid: package.json is not a JSON file."],"vs/platform/extensions/common/extensionValidator":["Could not parse `engines.vscode` value {0}. Please use, for example: ^1.22.0, ^1.22.x, etc.","Version specified in `engines.vscode` ({0}) is not specific enough. For vscode versions before 1.0.0, please define at a minimum the major and minor desired version. E.g. ^0.10.0, 0.10.x, 0.11.0, etc.","Version specified in `engines.vscode` ({0}) is not specific enough. For vscode versions after 1.0.0, please define at a minimum the major desired version. E.g. ^1.10.0, 1.10.x, 1.x.x, 2.x.x, etc.","Extension is not compatible with Code {0}. Extension requires: {1}."],"vs/platform/files/common/fileService":["Unable to resolve filesystem provider with relative file path '{0}'","No file system provider found for resource '{0}'","Unable to resolve non-existing file '{0}'","Unable to create file '{0}' that already exists when overwrite flag is not set","Unable to write file '{0}' ({1})","Unable to unlock file '{0}' because provider does not support it.","Unable to write file '{0}' that is actually a directory","File Modified Since","Unable to read file '{0}' ({1})","Unable to read file '{0}' ({1})","Unable to read file '{0}' ({1})","Unable to read file '{0}' that is actually a directory","File not modified since","Unable to read file '{0}' that is too large to open","Unable to copy when source '{0}' is same as target '{1}' with different path case on a case insensitive file system","Unable to move/copy when source '{0}' is parent of target '{1}'.","Unable to move/copy '{0}' because target '{1}' already exists at destination.","Unable to move/copy '{0}' into '{1}' since a file would replace the folder it is contained in.","Unable to create folder '{0}' that already exists but is not a directory","Unable to delete file '{0}' via trash because provider does not support it.","Unable to delete non-existing file '{0}'","Unable to delete non-empty folder '{0}'.","Unable to modify readonly file '{0}'","Unable to modify readonly file '{0}'"],"vs/platform/files/common/files":["Unknown Error","{0}B","{0}KB","{0}MB","{0}GB","{0}TB"],"vs/platform/files/common/io":["To open a file of this size, you need to restart and allow {0} to use more memory","File is too large to open"],"vs/platform/files/node/diskFileSystemProvider":["File already exists","File does not exist","Unable to move '{0}' into '{1}' ({2}).","Unable to copy '{0}' into '{1}' ({2}).","'File cannot be copied to same path with different path case","File at target already exists"],"vs/platform/request/common/request":["HTTP","The proxy setting to use. If not set, will be inherited from the `http_proxy` and `https_proxy` environment variables.","Controls whether the proxy server certificate should be verified against the list of supplied CAs.","The value to send as the `Proxy-Authorization` header for every network request.","Disable proxy support for extensions.","Enable proxy support for extensions.","Enable proxy support for extensions, fall back to request options, when no proxy found.","Enable proxy support for extensions, override request options.","Use the proxy support for extensions.","Controls whether CA certificates should be loaded from the OS. (On Windows and macOS, a reload of the window is required after turning this off.)"],"vs/platform/telemetry/common/telemetryService":["Telemetry","Enable diagnostic data to be collected. This helps us to better understand how {0} is performing and where improvements need to be made.","Enable diagnostic data to be collected. This helps us to better understand how {0} is performing and where improvements need to be made. [Read more]({1}) about what we collect and our privacy statement."],"vs/platform/terminal/common/terminalPlatformConfiguration":["An optional set of arguments to run the shell executable with.","Controls whether or not the profile name overrides the auto detected one.","A codicon ID to associate with this terminal.","A theme color ID to associate with this terminal.","An object with environment variables that will be added to the terminal profile process. Set to `null` to delete environment variables from the base environment.","A single path to a shell executable or an array of paths that will be used as fallbacks when one fails.","This is deprecated, the new recommended way to configure your default shell is by creating a terminal profile in {0} and setting its profile name as the default in {1}. This will currently take priority over the new profiles settings but that will change in the future.","This is deprecated, the new recommended way to configure your default shell is by creating a terminal profile in {0} and setting its profile name as the default in {1}. This will currently take priority over the new profiles settings but that will change in the future.","This is deprecated, the new recommended way to configure your default shell is by creating a terminal profile in {0} and setting its profile name as the default in {1}. This will currently take priority over the new profiles settings but that will change in the future.","Integrated Terminal","A path that when set will override {0} and ignore {1} values for automation-related terminal usage like tasks and debug.","A path that when set will override {0} and ignore {1} values for automation-related terminal usage like tasks and debug.","A path that when set will override {0} and ignore {1} values for automation-related terminal usage like tasks and debug.","The path of the shell that the terminal uses on Linux. [Read more about configuring the shell](https://code.visualstudio.com/docs/editor/integrated-terminal#_terminal-profiles).","The path of the shell that the terminal uses on macOS. [Read more about configuring the shell](https://code.visualstudio.com/docs/editor/integrated-terminal#_terminal-profiles).","The path of the shell that the terminal uses on Windows. [Read more about configuring the shell](https://code.visualstudio.com/docs/editor/integrated-terminal#_terminal-profiles).","The command line arguments to use when on the Linux terminal. [Read more about configuring the shell](https://code.visualstudio.com/docs/editor/integrated-terminal#_terminal-profiles).","The command line arguments to use when on the macOS terminal. [Read more about configuring the shell](https://code.visualstudio.com/docs/editor/integrated-terminal#_terminal-profiles).","The command line arguments to use when on the Windows terminal. [Read more about configuring the shell](https://code.visualstudio.com/docs/editor/integrated-terminal#_terminal-profiles).","The command line arguments to use when on the Windows terminal. [Read more about configuring the shell](https://code.visualstudio.com/docs/editor/integrated-terminal#_terminal-profiles).","The command line arguments in [command-line format](https://msdn.microsoft.com/en-au/08dfcab2-eb6e-49a4-80eb-87d4076c98c6) to use when on the Windows terminal. [Read more about configuring the shell](https://code.visualstudio.com/docs/editor/integrated-terminal#_terminal-profiles).","The Windows profiles to present when creating a new terminal via the terminal dropdown. Set to null to exclude them, use the {0} property to use the default detected configuration. Or, set the {1} and optional {2}","A profile source that will auto detect the paths to the shell.","The extension that contributed this profile.","The id of the extension terminal","The name of the extension terminal","The macOS profiles to present when creating a new terminal via the terminal dropdown. When set, these will override the default detected profiles. They are comprised of a {0} and optional {1}","The extension that contributed this profile.","The id of the extension terminal","The name of the extension terminal","The Linux profiles to present when creating a new terminal via the terminal dropdown. When set, these will override the default detected profiles. They are comprised of a {0} and optional {1}","The extension that contributed this profile.","The id of the extension terminal","The name of the extension terminal","Controls whether or not WSL distros are shown in the terminal dropdown","Whether new shells should inherit their environment from VS Code, which may source a login shell to ensure $PATH and other development variables are initialized. This has no effect on Windows.","Controls the maximum amount of lines that will be restored when reconnecting to a persistent terminal session. Increasing this will restore more lines of scrollback at the cost of more memory and increase the time it takes to connect to terminals on start up. This setting requires a restart to take effect and should be set to a value less than or equal to `#terminal.integrated.scrollback#`.","Whether to use a more efficient experimental approach for restoring the terminal's buffer. This setting requires a restart to take effect.","Whether to show hovers for links in the terminal output.","Integrated Terminal","The default profile used on Linux. This setting will currently be ignored if either {0} or {1} are set.","The default profile used on macOS. This setting will currently be ignored if either {0} or {1} are set.","The default profile used on Windows. This setting will currently be ignored if either {0} or {1} are set."],"vs/platform/userDataSync/common/abstractSynchronizer":["Cannot sync {0} as its local version {1} is not compatible with its remote version {2}","Cannot parse sync data as it is not compatible with the current version."],"vs/platform/userDataSync/common/keybindingsSync":["Unable to sync keybindings because the content in the file is not valid. Please open the file and correct it.","Unable to sync keybindings because the content in the file is not valid. Please open the file and correct it."],"vs/platform/userDataSync/common/settingsSync":["Unable to sync settings as there are errors/warning in settings file."],"vs/platform/userDataSync/common/userDataAutoSyncService":["Cannot sync because default service has changed","Cannot sync because sync service has changed","Cannot sync because syncing is turned off in the cloud","Cannot sync because default service has changed","Cannot sync because sync service has changed","Cannot sync because current session is expired","Cannot sync because syncing is turned off on this machine from another machine."],"vs/platform/userDataSync/common/userDataSync":["Settings Sync","Synchronize keybindings for each platform.","List of extensions to be ignored while synchronizing. The identifier of an extension is always `${publisher}.${name}`. For example: `vscode.csharp`.","Expected format '${publisher}.${name}'. Example: 'vscode.csharp'.","Configure settings to be ignored while synchronizing."],"vs/platform/userDataSync/common/userDataSyncMachines":["Cannot read machines data as the current version is incompatible. Please update {0} and try again."]});

//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/83bd43bc519d15e50c4272c6cf5c1479df196a4d/core/vs/code/electron-browser/sharedProcess/sharedProcessMain.nls.js.map
