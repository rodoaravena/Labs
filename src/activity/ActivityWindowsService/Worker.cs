using System.Net.WebSockets;
using System.ServiceProcess;

namespace ActivityWindowsService;

public class Worker : BackgroundService
{
    private readonly ILogger<Worker> _logger;
    private readonly string SERVICE_NAME = "Activity";
    private static string DOMAIN = "127.0.0.1:8000";
    private readonly string WORKSTATION = Environment.MachineName;
    private readonly string API_BASE_URI = $"https://{DOMAIN}/api/";
    private readonly string START_ENDPOINT = "activity/session/start";
    private readonly string END_ENDPOINT = "activity/session/end";
    private readonly string WEBSOCKET_BASE_URI = $"wss://{DOMAIN}/";
    private readonly string WEBSOCKET_ENDPOINT = "ws/activity/";
    private readonly string WEBSOCKET_SECRET = "secretoenlamontana";

    static readonly HttpClient ActivityHttpClient = new HttpClient();
    private readonly ClientWebSocket ActivityWebSocket = new ClientWebSocket();
    private readonly Timer AliveTimer;
    private readonly long StartTimestamp;


    public Worker(ILogger<Worker> logger)
    {
        _logger = logger;
        StartTimestamp = GetCurrentTimestamp();

        //ServiceName = SERVICE_NAME;
    }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        while (!stoppingToken.IsCancellationRequested)
        {
            if (_logger.IsEnabled(LogLevel.Information))
            {
                _logger.LogInformation("Worker running at: {time}", DateTimeOffset.Now);
            }
            await Task.Delay(1000, stoppingToken);
        }
    }

    private long GetCurrentTimestamp()
    {
        DateTime dt = DateTime.Now;
        return ((DateTimeOffset)dt).ToUnixTimeMilliseconds();
    }
}
