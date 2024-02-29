using System;
using System.Threading;
using WindowsInput;

namespace ScrapTF
{
    internal class Program
    {
        static void Main(string[] args)
        {
            while(true)
            {
                Random rndTimer = new Random();
                int value = rndTimer.Next(3721, 4537);
                Thread.Sleep(value);
                InputSimulator simulator = new InputSimulator();
                simulator.Mouse.LeftButtonClick();
            }
        }
    }
}
