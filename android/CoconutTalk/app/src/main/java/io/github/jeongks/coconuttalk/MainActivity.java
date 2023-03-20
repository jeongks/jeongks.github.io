package io.github.jeongks.coconuttalk;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;
import android.widget.ImageView;

public class MainActivity extends AppCompatActivity {

    private String[] names = {
            "kisuk","jacob","rani"
    };
    RecyclerView chat_list_recycler;
    ImageView add_friend_ic_imageView;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        add_friend_ic_imageView = (ImageView) findViewById(R.id.add_friend_ic_imageview);
        chat_list_recycler = (RecyclerView) findViewById(R.id.chat_list_recycler);
        ChatListAdapter chatListAdapter = new ChatListAdapter(this, names);
        chat_list_recycler.setAdapter(chatListAdapter);


    }
}