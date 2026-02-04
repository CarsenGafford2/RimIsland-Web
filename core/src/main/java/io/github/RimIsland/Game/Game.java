package io.github.RimIsland.Game;

import com.badlogic.gdx.ApplicationAdapter;
import com.badlogic.gdx.Gdx;
import com.badlogic.gdx.graphics.GL20;
import com.badlogic.gdx.graphics.g2d.BitmapFont;
import com.badlogic.gdx.graphics.g2d.SpriteBatch;

public class Game extends ApplicationAdapter {
    SpriteBatch batch;
    BitmapFont font;

    public void create()
    {
        batch = new SpriteBatch();
        font = new BitmapFont();
    }

    public void render()
    {
        float delta = Gdx.graphics.getDeltaTime();
        update(delta);
        Gdx.gl.glClear(GL20.GL_COLOR_BUFFER_BIT);
        batch.begin();
        font.draw(batch, "FPS: " + Gdx.graphics.getFramesPerSecond(), 10, 580);
        batch.end();
    }

    private void update(float delta)
    {

    }

    public void dispose()
    {
        batch.dispose();
        font.dispose();
    }
}
