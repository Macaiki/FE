export default {
    setThreads(state, param) {
        if (param !== null) {
            state.threads = param.reverse() 
        }else{
            state.threads = []
        }
    },
    addThreads(state, param){
        state.threads.splice(0,0, param);
    },
    upvote(state, param, id){
        state.threads.map(thread => {
            if(thread.ID == id){
                if(thread.isUpvoted == param){
                    thread.isUpvoted = 0;
                }else{
                    thread.isUpvoted = param;
                }
            }
        });
    },
    downvote(state, param, id){
        state.threads.map(thread => {
            if(thread.ID == id){
                if(thread.isDownvoted == param){
                    thread.isDownvoted = 0;
                }else{
                    thread.isDownvoted = param;
                }
            }
        });
    },
    setThread(state,param){
        state.thread = param;
    }
}