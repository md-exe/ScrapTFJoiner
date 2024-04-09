using System;
using System.Threading;
using WindowsInput;

namespace ScrapTF
{
    internal class Program
    {
        static void Main()
        {
            // Переменная остановки
            bool stop = false;

            // Ожидание начала выполнения
            Console.WriteLine("Нажмите любую клавишу, чтобы начать.");
            Console.ReadKey();
            // Очистка консоли
            Console.Clear();
            // Таймер подготовки
            for (int i = 1; i < 4; i++)
            {
                Thread.Sleep(1000);
                Console.WriteLine(i);
            }
            Console.WriteLine("Поехали!");

            int count = 0;

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
                count++;
                Console.WriteLine($"Вкладка закрыта. {count}");
            }
        }
    }
}
