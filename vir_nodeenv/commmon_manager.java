// LCA of n-ary tree
    //Employee firstEmployee = ceo.getReports().get(0).getReports().get(0).getReports().get(0).getReports().get(0);
    //Employee secondEmployee = ceo.getReports().get(0).getReports().get(0).getReports().get(0).getReports().get(1);
    public static Employee commonmanager(Employee ceo, Employee firstEmployee, Employee secondEmployee) {
        Stack<Employee> first = new Stack<Employee>();
        Stack<Employee> second = new Stack<Employee>();
        Employee root = ceo;
        dfs(root, firstEmployee, first);
        dfs(root, secondEmployee, second);
        if( (!first.isEmpty() && first.peek().getId() == firstEmployee.getId())
                && (!second.isEmpty() && second.peek().getId() == secondEmployee.getId())) {
            int size1 = first.size();
            int size2 = second.size();
            int diff = Math.abs(size1-size2);
            if(size1 > size2) {
                // first stack pop element until size equals the second
                moveUp(first, diff);
            } else {
                moveUp(second, diff);
            }
            while(first.peek().getId() != second.peek().getId()) {
                first.pop();
                second.pop();
            }
            if(first.size() > 0) {
                return first.pop();
            }
        }
        return null;
    }
    public static void moveUp(Stack<Employee> stack, int diff) {
        while(diff > 0 && !stack.isEmpty()) {
            stack.pop();
            diff--;
        }
    }
    public static boolean dfs(Employee root, Employee curr, Stack<Employee> stack) {
        stack.push(root);
        if(root.getId() == curr.getId()) {
            return true;
        }
        for(Employee em : root.getReports()) {
            boolean res = dfs(em, curr, stack);
            if(res == true) {
                return true;
            }
        }
        stack.pop();
        return false;
    }
    public static Employee commonmanageroftree(Employee ceo, Employee firstEmployee, Employee secondEmployee) {
        if(ceo==null) return ceo;
        if(ceo==firstEmployee) return ceo;
        if(ceo==secondEmployee) return ceo;
        boolean isEmployee1 = false;
        boolean isEmployee2 = false;
        for(Employee em : ceo.getReports()) {
            Employee res = commonmanageroftree(em, firstEmployee, secondEmployee);
            if(res == firstEmployee) {
                isEmployee1 = true;
            } else if(res == secondEmployee) {
                isEmployee2 = true;
            } else if(res != null) {
                return res;
            }
        }
        if(isEmployee1==true && isEmployee2==true) {
            return ceo;
        } else if(isEmployee1==true) {
            return firstEmployee;
        } else if(isEmployee2==true) {
            return secondEmployee;
        }
        return null;
    }
