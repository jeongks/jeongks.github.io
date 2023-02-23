package io.github.jeongks.idealrpg;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.constraintlayout.widget.ConstraintLayout;

import android.os.Bundle;
import android.view.MenuItem;

import com.google.android.material.bottomnavigation.BottomNavigationView;
import com.google.android.material.navigation.NavigationBarView;

import org.jetbrains.annotations.NotNull;

import io.github.jeongks.idealrpg.bottomnav.CharacterFragment;

public class MainActivity extends AppCompatActivity {

    ConstraintLayout fragment_container_layout;
    BottomNavigationView btmNavView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        fragment_container_layout = (ConstraintLayout) findViewById(R.id.fragment_container_layout);
        btmNavView = (BottomNavigationView) findViewById(R.id.main_bottom_nav_view);

        ConstraintLayout.LayoutParams layoutParams = new ConstraintLayout.LayoutParams(
            ConstraintLayout.LayoutParams.MATCH_PARENT,
            ConstraintLayout.LayoutParams.MATCH_PARENT
        );

        layoutParams.setMargins(0,0,0,btmNavView.getHeight());

        CharacterFragment characterFragment = new CharacterFragment();

        getSupportFragmentManager().beginTransaction().replace(R.id.fragment_container_layout,characterFragment).commit();

        btmNavView.setOnItemSelectedListener(item -> {
            switch (item.getItemId()){
                case R.id.character_menu:
                    getSupportFragmentManager().beginTransaction().replace(R.id.fragment_container_layout,characterFragment).commit();
                    return true;
            }
            return false;
        });
    }
}