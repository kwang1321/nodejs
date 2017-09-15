//3. Find the min steps of maze
    //意思是说有一个M*N的maze，0代表可以通过，1代表不可以通过，然后给你一个出口（x,y），找从（0,0）到出口的最少steps，如果找不到path就返回-1
    static int minlen = Integer.MAX_VALUE;
    public static void bfsfind(int[][] mazeinit) {
        if(mazeinit == null || mazeinit.length == 0) return;
        int row = mazeinit.length;
        int col = mazeinit[0].length;
        boolean[][] visited = new boolean[row][col];
        int[] direcx = {-1,0,1,0};
        int[] direcy = {0,-1,0,1};
        bfs(mazeinit, visited, 0, 0, 0, direcx, direcy);
        return;
    }
    public static void bfs(int[][] mazeinit, boolean[][] visited, int row, int col, int pathlen, int[] direcx, int[] direcy) {
        if(!isValid(mazeinit, visited, row, col)) return;
        if(row == mazeinit.length-1 && col == mazeinit[0].length-1) {
            minlen = Math.min(minlen, pathlen);
            return;
        }
        for(int i = 0; i < 4; i++) {
            visited[row][col] = true;
            bfs(mazeinit, visited, row+direcx[i], col+direcy[i], pathlen+1, direcx, direcy);
            visited[row][col] = false;
        }   
    }
    public static boolean isValid(int[][] mazeinit, boolean[][] visited, int row, int col) {
        int m = mazeinit.length;
        int n = mazeinit[0].length;
        return row >=0 && row < m && col >= 0 && col < n && mazeinit[row][col] == 0 && visited[row][col] == false;
    }
    public static int bdfsfind(int[][] mazeinit, Point src, Point tar) {
        if(mazeinit == null || mazeinit.length == 0) return 0;
        
        int row = mazeinit.length;
        int col = mazeinit[0].length;
        boolean[][] visited = new boolean[row][col];
        if( !isBfsValid(mazeinit, visited, src.x, src.y) ) return 0;
        if( !isBfsValid(mazeinit, visited, tar.x, tar.y) ) return 0;
        int[] direcx = {-1,0,1,0};
        int[] direcy = {0,-1,0,1};
        PointNode root = new PointNode(new Point(src.x, src.y), 0);
        visited[src.x][src.y] = true;
        Queue<PointNode> queue = new LinkedList<PointNode>();
        queue.add(root);
        while(!queue.isEmpty()) {
            int size = queue.size();
            for(int i = 0; i < size; i++) {
                PointNode temp = queue.poll();
                //find a matched solution
                if(temp.pt.x == tar.x && temp.pt.y == tar.y) return temp.dist;
                for(int j = 0; j < 4; j++) {
                    // tranverse point is valid
                    
                    if(isBfsValid(mazeinit, visited, temp.pt.x+direcx[j], temp.pt.y+direcy[j])) {
                        int rowtemp = temp.pt.x+direcx[j];
                        int coltemp = temp.pt.y+direcy[j];
                        visited[rowtemp][coltemp] = true;
                        PointNode qadd = new PointNode(new Point(rowtemp, coltemp), temp.dist+1);
                        queue.offer(qadd);
                    }
                }
            }
        }
        return 0;
    }
    public static boolean isBfsValid(int[][] mazeinit, boolean[][] visited, int row, int col) {
        int m = mazeinit.length;
        int n = mazeinit[0].length;
        return row >= 0 && row < m && col >= 0 && col < n 
                && mazeinit[row][col] == 0 && visited[row][col] == false;
    }

class Point {
    int x;
    int y;
    Point(int x, int y) {
        this.x = x;
        this.y = y;
    }
}
class PointNode {
    Point pt;
    int dist;
    PointNode(Point pt, int dist) {
        //this.x = x;
        this.pt = pt;
        this.dist = dist;
    }
}
