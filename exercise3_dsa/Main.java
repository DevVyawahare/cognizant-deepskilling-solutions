package exercise3_dsa;

import java.util.Arrays;
import java.util.Comparator;

public class Main {
    public static void main(String[] args) {
        // Setup an array of products
        Product[] products = {
            new Product(105, "Wireless Mouse", "Electronics"),
            new Product(101, "Mechanical Keyboard", "Electronics"),
            new Product(108, "Gaming Monitor", "Electronics"),
            new Product(103, "USB-C Cable", "Accessories")
        };

        int targetId = 108;

        // 1. Test Linear Search (Works on unsorted arrays)
        System.out.println("--- Testing Linear Search ---");
        Product resultLinear = SearchAlgorithms.linearSearch(products, targetId);
        System.out.println("Result: " + (resultLinear != null ? resultLinear : "Product Not Found"));

        // 2. Prepare for Binary Search by sorting array by Product ID
        Product[] sortedProducts = products.clone();
        Arrays.sort(sortedProducts, Comparator.comparingInt(Product::getProductId));

        // 3. Test Binary Search (Requires sorted arrays)
        System.out.println("\n--- Testing Binary Search ---");
        Product resultBinary = SearchAlgorithms.binarySearch(sortedProducts, targetId);
        System.out.println("Result: " + (resultBinary != null ? resultBinary : "Product Not Found"));
    }
}