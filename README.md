# tony-businessman
The project for my brother to help him with his reports.


This application is configured to run on Google Cloud Platfor.

To publish application:

- dotnet publish -c Release;
- go to prepared "Publish" directory;
- gcloud beta app deploy --version vXXXX , where XXXX - new app version number

For more information:

- https://www.hanselman.com/blog/TryingASPNETCoreOnTheGoogleCloudPlatformAppEngineFlexibleEnvironment.aspx
- https://kiosk-dot-codelabs-site.appspot.com/codelabs/cloud-app-engine-aspnetcore/index.html?index=..%2F..%2Fndc#0
