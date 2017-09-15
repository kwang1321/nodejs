// ball score
    public static int ballscore(String[] strarr) {
        int score = 0;
        if(strarr == null || strarr.length == 0) return score;
        Stack<Integer> stack = new Stack<Integer>();
        for(int i = 0; i < strarr.length; i++) {
            char ch = strarr[i].charAt(0);
            if(ch != 'X' && ch != '+' && ch != 'Z') {
                int ps = Integer.parseInt(strarr[i]);
                stack.push(ps);
                score += ps;
            } else {
                switch(ch) {
                    case 'Z' :
                        if(!stack.isEmpty()) {
                            int curr = stack.pop();
                            score -= curr;
                        }
                        break;
                    case 'X' :
                        if(!stack.isEmpty()) {
                            int curr = stack.peek();
                            score += 2*curr;
                            stack.push(2*curr);
                        }
                        break;
                    case '+' :
                        if(!stack.isEmpty()) {
                            int i1 = stack.pop();
                            if(!stack.isEmpty()) {
                                int i2 = stack.pop();
                                score += i1;
                                score += i2;
                                stack.push(i2);
                                stack.push(i1);
                                stack.push(i1+i2);
                            } else {
                                score += i1;
                                stack.push(i1);
                                stack.push(i1);
                            }
                        }
                        break;
                    default :
                        break;
                } // end switch
            } // end first if-else
        } // end for
        return score;
    }
