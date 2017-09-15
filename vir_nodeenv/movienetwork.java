private static void bfsSearchMovieNetwork(Movie movie, PriorityQueue<Movie> queue) {
    for (Movie m : movie.getSimilarMovies()) {
        if (!queue.contains(m)) {
            queue.offer(m);.
            bfsSearchMovieNetwork(m, queue);
        }
    }
}
PriorityQueue<Movie> queue = new PriorityQueue<>(new Comparator<Movie>() {
    @Override
    public int compare(Movie m1, Movie m2) {
        return new Float(m2.getRating()).compareTo(m1.getRating());
    }
});

private static void bfsSearchMovieNetwork(Movie movie, PriorityQueue<Movie> queue) {
    Queue que = new LinkedList;
    que.offer(movie);
    while(!que.isEmpty()) {
           int size = que.size();
           for(int i = 0; i < size; i++) {
                  Movie temp = que.poll();
                  for (Movie m : temp.getSimilarMovies()) {
                           if(queue.size() < k) {
                                   queue.offer(m);
                            } else if(queue.peek().ratings < m.ratings) {
                                   queue.poll();
                                    queue.offer(m);
                            }
                  }
           }
    }
}

