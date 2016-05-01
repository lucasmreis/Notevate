package com.notevate;

import android.os.Bundle;
import android.app.Activity;
import com.crashlytics.android.Crashlytics;
import io.fabric.sdk.android.Fabric;

import com.facebook.react.ReactActivity;
import com.microsoft.codepush.react.CodePush;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.smixx.fabric.FabricPackage;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;

import android.content.Intent;
import android.content.res.Configuration;
import com.github.yamill.orientation.OrientationPackage;

import java.util.Arrays;
import java.util.List;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "Notevate";
    }

    /**
     * Returns whether dev mode should be enabled.
     * This enables e.g. the dev menu.
     */
    @Override
    protected boolean getUseDeveloperSupport() {
        return BuildConfig.DEBUG;
    }

    /**
     * A list of packages used by the app. If the app uses additional views
     * or modules besides the default ones, add more packages here.
     */
    @Override
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
            new MainReactPackage(),
            new CodePush("QHoRBsMFxApvhWCc8pH3WtsEyX-aEJG24JdkW", this, BuildConfig.DEBUG),
            new RNDeviceInfo(),
            new FabricPackage(this),
            new OrientationPackage(this)
        );
    }

    @Override
    protected String getJSBundleFile() {
        return CodePush.getBundleUrl();
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Fabric.with(this, new Crashlytics());
    }

    @Override
    public void onConfigurationChanged(Configuration newConfig) {
        super.onConfigurationChanged(newConfig);
        Intent intent = new Intent("onConfigurationChanged");
        intent.putExtra("newConfig", newConfig);
        this.sendBroadcast(intent);
    }
}
