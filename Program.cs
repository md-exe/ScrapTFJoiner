﻿using System;
using System.Threading;
using WindowsInput;

namespace ScrapTF
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Нажмите любую клавишу, чтобы начать.");
            Console.ReadKey();
            Console.Clear();
            Thread.Sleep(1500);
            Console.WriteLine("Поехали!");

            while(true)
            {
                Random rndTimer = new Random();
                int value = rndTimer.Next(3420, 3823); // 4018, 4537 - оптимально
                Thread.Sleep(value);
                InputSimulator simulator = new InputSimulator();
                simulator.Mouse.LeftButtonClick();

                // Таймер для того, чтобы убедиться, что в раздачу зашёл
                Thread.Sleep(rndTimer.Next(723, 1222));

                simulator.Keyboard.KeyDown(WindowsInput.Native.VirtualKeyCode.LCONTROL);
                simulator.Keyboard.KeyPress(WindowsInput.Native.VirtualKeyCode.VK_W);
                simulator.Keyboard.KeyUp(WindowsInput.Native.VirtualKeyCode.LCONTROL);
                Console.WriteLine("Вкладка закрыта.");

                // жопа
            }
        }
    }
}
