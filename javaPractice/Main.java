package javaPractice;

// public class Main {
//     public static void main(String[] args) {
//         int[] stones2 = {7,6,7,6,9};
//         LastStoneWeight one = new LastStoneWeight();
//         System.out.println(one.lastStoneWeight(stones2));
//     }

// }

import java.util.HashSet;


class Main {
    HashSet<Node> seen;

    public static void main(String[] args) {
        HashSet seen = new HashSet<Node>();
        
        
        Node node2 = new Node();
        node2.id = "Hi pat2";
        Node node1 = new Node();
        node1.id = "Hi pat";
        node1.connections = new HashSet();
        node1.connections.add(node2);


        System.out.println("HEY! " + hasRouteDfs(node1, node2));
    }
    
    boolean hasRouteDfs(Node start, Node end) {
	if (start.equals(end)) {	
		return true;
	}
	
	seen.add(start);

	for (Node node : start.connections) {
		if (!seen.contains(node)){
			if (hasRouteDfs(node, end)){
				return true;
			}
		}
	}
	
	return false;
}
