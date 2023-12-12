using EnergyActivityService;
using Microsoft.Extensions.Logging.Configuration;
using Microsoft.Extensions.Logging.EventLog;

HostApplicationBuilder builder = Host.CreateApplicationBuilder(args);
builder.Services.AddWindowsService(options =>
{
    options.ServiceName = "Energy Activity";
});

LoggerProviderOptions.RegisterProviderOptions<
    EventLogSettings, EventLogLoggerProvider>(builder.Services);

builder.Services.AddSingleton<EAService>();
builder.Services.AddHostedService<WindowsBackgroundService>();

IHost host = builder.Build();
host.Run();