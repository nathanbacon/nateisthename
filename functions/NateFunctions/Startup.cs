using System;
using Microsoft.Azure.Functions.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection;
using AzureFunctions.Extensions.OpenIDConnect.Configuration;
using AzureFunctions.Extensions.OpenIDConnect.InProcess.Configuration;

namespace NateFunctions
{
  public class Startup : FunctionsStartup
  {
    public override void Configure(IFunctionsHostBuilder builder)
    {
      var audience = Environment.GetEnvironmentVariable("OpenIdConnect_Audience");
      var issuer = Environment.GetEnvironmentVariable("OpenIdConnect_Issuer");
      var issuerUrl = Environment.GetEnvironmentVariable("OpenIdConnect_IssuerUrl");
      builder.Services.AddOpenIDConnect(config =>
      {
        config.SetTokenValidation(TokenValidationParametersHelpers.Default(audience, issuer));
        config.SetIssuerBaseUrlConfiguration(issuerUrl);
      });
    }
  }
}
