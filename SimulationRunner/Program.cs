using System;
using System.Diagnostics;
using System.IO;

namespace SimulationRunner
{
    class Program
    {
        static void Main(string[] args)
        {
            string cleaned = File.ReadAllText("data.txt").Replace("\n", "").Replace("\r", "");
            int clients = int.Parse(args[0]);
            for (int i = 0; i < clients; i++)
            {
                Console.WriteLine($"starting test {i}");
                ProcessStartInfo startInfo = new System.Diagnostics.ProcessStartInfo();
                startInfo.FileName = "RunChromeHeadLess.bat";
                ProcessAsyncHelper.RunAsync(startInfo);
            }
            
            Console.WriteLine("Now just wait, and dont press any key");
            Console.ReadKey();
        }
    }

}
