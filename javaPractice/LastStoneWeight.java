package javaPractice;

import java.util.Comparator;
import java.util.PriorityQueue;

public class LastStoneWeight {

    public void checkStones(int[] stones) {
        for (int i = 0; i < stones.length; i++) {
            System.out.println(stones[i]);
        }
    }

    public int lastStoneWeight(int[] stones) {
        PriorityQueue<Integer> heap = new PriorityQueue<>(Comparator.reverseOrder());
        for (int weight: stones) {
            heap.add(weight);
        }

        int biggest = heap.remove();
        while (heap.size() > 0) {
            int curr = heap.remove();
            if (curr != biggest) {
                int remainder = Math.abs(biggest - curr);
                if (heap.size() > 0) {
                    if (remainder >= heap.peek()) {
                        biggest = remainder;
                    } else {
                        biggest = heap.remove();
                        heap.add(remainder);
                    }
                } else {
                    biggest = remainder;
                }
            } else {
                biggest = heap.remove();
            }
            System.out.println(biggest);
        }
        return biggest;
    }
}
