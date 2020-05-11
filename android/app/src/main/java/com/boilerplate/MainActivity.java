package com.boilerplate;
import com.facebook.react.ReactActivity;
// import org.devio.rn.splashscreen.SplashScreen; // import this
import com.zoontek.rnbootsplash.RNBootSplash;
import android.os.Bundle; // import this

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  
   @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    RNBootSplash.init(R.drawable.background_splash, MainActivity.this); // <- display the generated bootsplash.xml drawable over our MainActivity 
  }
  @Override
  protected String getMainComponentName() {
    return "boilerplate";
  }
  //  @Override
  //   public void onCreate(Bundle savedInstanceState) {
  //       SplashScreen.show(this);  // here
  //       super.onCreate(savedInstanceState);
  //   }
  
}
