package io.github.jeongks.coconuttalk;

import android.content.Context;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

public class ChatListAdapter extends RecyclerView.Adapter<ChatListAdapter.ChatListViewHolder> {

    private Context context;
    private String[] names;

    public ChatListAdapter(Context context, String[] names){
        this.context = context;
        this.names = names;
    }

    @NonNull
    @Override
    public ChatListViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        return null;
    }

    @Override
    public void onBindViewHolder(@NonNull ChatListViewHolder holder, int position) {

    }

    @Override
    public int getItemCount() {
        return 0;
    }

    public class ChatListViewHolder extends RecyclerView.ViewHolder {

        public ChatListViewHolder(@NonNull View itemView) {
            super(itemView);
        }
    }
}
