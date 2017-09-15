// find distance between two node of BST
    // http://algorithms.tutorialhorizon.com/find-the-distance-between-two-nodes-of-a-binary-tree/ （find distance between two node of Binary Tree）
    public static TreeNode LCABST(TreeNode root, TreeNode p, TreeNode q) {
        if(root == null || p == root || q == root) return root;
        if((root.val > p.val && root.val < q.val) ||
                (root.val < p.val && root.val > q.val)) {
            return root;
        } else if(root.val > p.val && root.val > q.val) {
            return LCABST(root.left, p, q);
        } else if(root.val < p.val && root.val < q.val) {
            return LCABST(root.right, p, q);
        } else {
            return null;
        }
    }
    public static int findlen(TreeNode root, int n) {
        return finddistancebst(root, n)-1;
    }
    public static int finddistancebst(TreeNode root, int n) {
        if(root == null) return 0;
        int x = 0;
        if(root.val == n) return x+1;
        if(root.val > n) {
            x = finddistancebst(root.left, n);
        } else {
            x = finddistancebst(root.right, n);
        }
        if(x > 0)
            return x+1;
        else return 0;
    }
    public static int bstdistance(int[] values, int n, int node1, int node2) {
        // create the tree use values array and n
        if(values == null || values.length == 0) return 0;
        TreeNode root = new TreeNode(values[0]);
        for(int i = 1; i < values.length; i++) {
            createbst(root, values[i]);
        }
        //TreeNode root = createbst(values); // this is a func
        int len1 = findlen(root, node1);
        if(len1==-1) return 0;
        int len2 = findlen(root, node2);
        if(len2==-1) return 0;
        int lcaval = LCABST1(root, node1, node2).val;
        int lenmid = findlen(root, lcaval);
        return len1+len2-2*lenmid;
    }
    public static void createbst(TreeNode root, int value) {
        if(value < root.val) {
            if(root.left == null) {
                root.left = new TreeNode(value);
            } else {
                createbst(root.left, value);
            }
        } else {
            if(root.right == null) {
                root.right = new TreeNode(value);
            } else {
                createbst(root.right, value);
            }
        }
    }
    public static TreeNode LCABST1(TreeNode root, int i1, int i2) {
        if(root == null || i1 == root.val || i2 == root.val) return root;
        if((root.val > i1 && root.val < i2) ||
                (root.val < i1 && root.val > i2)) {
            return root;
        } else if(root.val > i1 && root.val > i2) {
            return LCABST1(root.left, i1, i2);
        } else if(root.val < i1 && root.val < i2) {
            return LCABST1(root.right, i1, i2);
        } else {
            return null;
        }
    }
