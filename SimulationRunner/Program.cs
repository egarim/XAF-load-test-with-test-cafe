using System;
using System.Diagnostics;

namespace SimulationRunner
{
    class Program
    {
        static void Main(string[] args)
        {
            int Clients = int.Parse(args[0]);
            for (int i = 0; i < Clients; i++)
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
