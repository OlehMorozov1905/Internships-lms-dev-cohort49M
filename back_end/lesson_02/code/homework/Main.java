package homework;

/**
 * @author Sergey Bugaenko
 * {@code @date} 29.11.2024
 */

/*
Дан диапазон чисел: от 1 до 2_000_000 включительно.

Задача: найти, сколько чисел из этого диапазона делятся нацело на 21
 и при этом содержат цифру 3.

Решить данную задачу в один поток.
Решить данную задачу в два потока, разделив между потоками заданный диапазон чисел пополам.

Сравнить результаты двух решений - они должны совпадать.
 */

public class Main {
    private static int counter;

    public static synchronized void increment() {
        counter++;
    }

    public static void main(String[] args) {
        int count1 = singleThreadSolution();
        counter = 0;
        int count2 = twoThreadSolution();
        System.out.println((count1 == count2) ? "Результаты одинаковые" : "Результаты отличаются");
    }

    public static int twoThreadSolution() {
        MyThread thread1 = new MyThread(1, 1_000_000);
        MyThread thread2 = new MyThread(1_000_001, 2_000_000);

        thread1.start();
        thread2.start();

        try {
            thread1.join();
            thread2.join();
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }

        System.out.println("Counter two threads: " + counter);
        return counter;

    }

    public static int singleThreadSolution() {
        MyThread thread = new MyThread(1, 2_000_000);

        thread.start();

        try {
            thread.join();
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }

        System.out.println("Counter value: " + counter);
        return counter;
    }


}
