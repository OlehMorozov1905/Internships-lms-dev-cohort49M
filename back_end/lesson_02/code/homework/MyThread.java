package homework;

/**
 * @author Sergey Bugaenko
 * {@code @date} 29.11.2024
 */

public class MyThread extends Thread {

    private final int startRange;
    private final int endRange;

    public MyThread(int startRange, int endRange) {
        this.startRange = startRange;
        this.endRange = endRange;
    }

    @Override
    public void run() {
        for (int i = startRange; i <= endRange; i++) {
            // 12453 -> "12453"
            if (i % 21 == 0 && String.valueOf(i).contains("3")){
               Main.increment();
            }
        }
    }
}
