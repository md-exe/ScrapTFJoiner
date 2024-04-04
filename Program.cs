using System;
using System.Threading;
using WindowsInput;
using System.Diagnostics;

namespace ScrapTF
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Переменная остановки
            bool stop = false;

            // Ожидание начала выполнения
            Console.WriteLine("Нажмите любую клавишу, чтобы начать.");
            Console.ReadKey();
            // Очистка консоли
            Console.Clear();
            // Таймер подготовки
            Thread.Sleep(1500);
            Console.WriteLine("Поехали!");

            // Пока не остановлено
            while(!stop)
            {
                // Проверка приостановки программы нажатием ENTER
                if (Console.KeyAvailable && Console.ReadKey(true).Key == ConsoleKey.Enter)
                {
                    Console.WriteLine("Выполнение программы приостановлено. Нажмите ENTER, чтобы продолжить.");
                    Console.ReadLine();
                    Console.Clear();
                }
                // Рандомайзер
                Random rndTimer = new Random();
                int value = rndTimer.Next(2981, 3365); // 4018, 4537 - оптимально
                // Сон
                Thread.Sleep(value);
                // Инициализация эмуляции клавиш
                InputSimulator simulator = new InputSimulator();
                // Эмуляция нажатия ЛКМ
                simulator.Mouse.LeftButtonClick();

                // Таймер для того, чтобы убедиться, что в раздачу зашёл
                Thread.Sleep(rndTimer.Next(723, 1222));

                // Зажатие CTRL, нажатие W, отжатие CTRL
                simulator.Keyboard.KeyDown(WindowsInput.Native.VirtualKeyCode.LCONTROL);
                simulator.Keyboard.KeyPress(WindowsInput.Native.VirtualKeyCode.VK_W);
                simulator.Keyboard.KeyUp(WindowsInput.Native.VirtualKeyCode.LCONTROL);
                Console.WriteLine("Вкладка закрыта.");

                //if(!isScrap())
                //{
                //    stop = true;
                //    Console.WriteLine("Текущая вкладка не является Scrap.tf");
                //    Console.ReadLine();
                //}
            }
        }

        // Проверка вкладок на наличие scrap.tf = не работает
        //static bool isScrap()
        //{
        //    Process[] processesChrome = Process.GetProcessesByName("chrome");
        //    Process[] processesVivaldi = Process.GetProcessesByName("vivaldi");

        //    foreach (Process process in processesChrome)
        //    {
        //        IntPtr mainWindowHandle = process.MainWindowHandle;
        //        string title = process.MainWindowTitle;

        //        if (title.Contains("scrap.tf"))
        //        {
        //            return true;
        //        }
        //    }
        //    foreach (Process process in processesVivaldi)
        //    {
        //        IntPtr mainWindowHandle = process.MainWindowHandle;
        //        string title = process.MainWindowTitle;

        //        if (title.Contains("scrap.tf"))
        //        {
        //            return true;
        //        }
        //    }
        //    return false;
        //}
    }
}
