const C3 = self.C3;
self.C3_GetObjectRefTable = function() {
    return [
        C3.Plugins.TiledBg,
        C3.Behaviors.Physics,
        C3.Behaviors.solid,
        C3.Plugins.Sprite,
        C3.Behaviors.Timer,
        C3.Behaviors.Bullet,
        C3.Behaviors.Pin,
        C3.Behaviors.Rotate,
        C3.Behaviors.DragnDrop,
        C3.Behaviors.skymenTrail,
        C3.Plugins.Keyboard,
        C3.Plugins.Text,
        C3.Behaviors.Fade,
        C3.Plugins.NinePatch,
        C3.Behaviors.Tween,
        C3.Behaviors.Anchor,
        C3.Behaviors.Sin,
        C3.Plugins.Touch,
        C3.Plugins.Audio,
        C3.Plugins.LocalStorage,
        C3.Plugins.System.Cnds.IsGroupActive,
        C3.Plugins.System.Cnds.OnLayoutStart,
        C3.Behaviors.Physics.Acts.SetSteppingMode,
        C3.Behaviors.Physics.Acts.SetIterations,
        C3.Behaviors.Physics.Acts.SetWorldGravity,
        C3.Plugins.System.Acts.SetVar,
        C3.Plugins.System.Exps.choose,
        C3.Plugins.Audio.Acts.Stop,
        C3.Plugins.System.Cnds.While,
        C3.Plugins.System.Cnds.CompareVar,
        C3.Plugins.Sprite.Cnds.IsOverlappingOffset,
        C3.Plugins.Sprite.Acts.SetBoolInstanceVar,
        C3.Behaviors.Physics.Acts.ApplyImpulse,
        C3.Plugins.Sprite.Cnds.OnCreated,
        C3.Behaviors.Physics.Acts.SetAngularDamping,
        C3.Behaviors.Physics.Acts.SetFriction,
        C3.Plugins.Sprite.Acts.SetY,
        C3.Plugins.Sprite.Cnds.IsBoolInstanceVarSet,
        C3.Plugins.Sprite.Cnds.AngleWithin,
        C3.Behaviors.Physics.Acts.ApplyForceAtAngle,
        C3.Plugins.Sprite.Acts.SetPosToObject,
        C3.Plugins.Sprite.Cnds.CompareInstanceVar,
        C3.Plugins.Sprite.Acts.SetAngle,
        C3.Plugins.System.Exps.anglelerp,
        C3.Plugins.Sprite.Exps.Angle,
        C3.Plugins.System.Exps.dt,
        C3.Plugins.Sprite.Acts.SetInstanceVar,
        C3.Plugins.Sprite.Cnds.IsMirrored,
        C3.Behaviors.Physics.Acts.ApplyImpulseAtAngle,
        C3.Plugins.Sprite.Cnds.PickChildren,
        C3.Plugins.Sprite.Acts.RemoveFromParent,
        C3.Behaviors.Bullet.Acts.SetEnabled,
        C3.Behaviors.Bullet.Acts.SetSpeed,
        C3.Behaviors.Bullet.Acts.SetAngleOfMotion,
        C3.Plugins.Sprite.Acts.SetAnimFrame,
        C3.Plugins.System.Exps.random,
        C3.Plugins.Sprite.Exps.AnimationFrameCount,
        C3.Plugins.Sprite.Cnds.OnCollision,
        C3.Plugins.Sprite.Acts.AddChild,
        C3.Plugins.TiledBg.Cnds.OnCreated,
        C3.Behaviors.skymenTrail.Acts.Attach,
        C3.Plugins.TiledBg.Acts.ZMoveToObject,
        C3.Plugins.Sprite.Acts.SetX,
        C3.Plugins.Sprite.Exps.X,
        C3.Plugins.Sprite.Exps.ImagePointX,
        C3.Behaviors.Rotate.Acts.SetSpeed,
        C3.Behaviors.Bullet.Exps.Speed,
        C3.Plugins.Keyboard.Cnds.IsKeyDown,
        C3.Plugins.Touch.Cnds.IsTouchingObject,
        C3.Plugins.Keyboard.Cnds.OnKey,
        C3.Plugins.Touch.Cnds.OnTouchObject,
        C3.Plugins.Keyboard.Cnds.OnKeyReleased,
        C3.Plugins.Sprite.Exps.ImagePointY,
        C3.Plugins.Sprite.Exps.Y,
        C3.Plugins.System.Cnds.Every,
        C3.Plugins.System.Acts.Wait,
        C3.Plugins.Sprite.Cnds.CompareY,
        C3.Behaviors.Bullet.Cnds.IsEnabled,
        C3.Plugins.Audio.Acts.Play,
        C3.Plugins.Sprite.Acts.Spawn,
        C3.Plugins.System.Acts.AddVar,
        C3.Plugins.System.Acts.RestartLayout,
        C3.Plugins.Sprite.Acts.SetPos,
        C3.Behaviors.DragnDrop.Cnds.OnDragStart,
        C3.Behaviors.DragnDrop.Cnds.OnDrop,
        C3.Plugins.Text.Acts.SetText,
        C3.Plugins.System.Acts.GoToLayout,
        C3.Plugins.System.Acts.ResetEventVar,
        C3.Plugins.Sprite.Acts.SetVisible,
        C3.Behaviors.Fade.Acts.StartFade,
        C3.Plugins.Sprite.Exps.Width,
        C3.Plugins.Sprite.Exps.ImageWidth,
        C3.Plugins.Sprite.Acts.SetScale,
        C3.Behaviors.Tween.Acts.TweenTwoProperties,
        C3.Plugins.Text.Acts.Destroy,
        C3.Plugins.System.Acts.CreateObject,
        C3.Plugins.Sprite.Acts.SetAnim,
        C3.Plugins.Audio.Cnds.IsTagPlaying,
        C3.Plugins.System.Cnds.EveryTick,
        C3.ScriptsInEvents.Ads_Event1_Act1,
        C3.ScriptsInEvents.Ads_Event1_Act2,
        C3.ScriptsInEvents.Ads_Event1_Act3,
        C3.Plugins.System.Cnds.Compare,
        C3.Plugins.System.Exps.timescale,
        C3.Plugins.System.Acts.SetTimescale,
        C3.Plugins.Audio.Acts.SetSilent,
        C3.ScriptsInEvents.Ads_Event6_Act1,
        C3.ScriptsInEvents.Ads_Event7_Act1,
        C3.ScriptsInEvents.Ads_Event8_Act1,
        C3.ScriptsInEvents.Menu_Event1_Act1,
        C3.ScriptsInEvents.Menu_Event1_Act2,
        C3.Plugins.LocalStorage.Acts.CheckItemExists,
        C3.Plugins.System.Exps.projectname,
        C3.ScriptsInEvents.Menu_Event2_Act1,
        C3.Plugins.System.Cnds.TriggerOnce,
        C3.ScriptsInEvents.Menu_Event8_Act1,
        C3.ScriptsInEvents.Menu_Event11_Act1,
        C3.ScriptsInEvents.Menu_Event12_Act1
    ];
};
self.C3_JsPropNameTable = [{
        Physics: 0
    },
    {
        Solid: 0
    },
    {
        TiledBackground: 0
    },
    {
        BGs: 0
    },
    {
        ID: 0
    },
    {
        Landed: 0
    },
    {
        UpHand: 0
    },
    {
        ball: 0
    },
    {
        ThrowSpeed: 0
    },
    {
        Direction: 0
    },
    {
        dx: 0
    },
    {
        dy: 0
    },
    {
        Timer: 0
    },
    {
        player: 0
    },
    {
        hand: 0
    },
    {
        Bullet: 0
    },
    {
        Pin: 0
    },
    {
        Rotate: 0
    },
    {
        DragDrop: 0
    },
    {
        Ball: 0
    },
    {
        TrailRenderer: 0
    },
    {
        Ball_parti: 0
    },
    {
        BallSahdow: 0
    },
    {
        Keyboard: 0
    },
    {
        Active: 0
    },
    {
        goal: 0
    },
    {
        goal2: 0
    },
    {
        aro_adelante_izqdefault: 0
    },
    {
        aro_atrasdefault: 0
    },
    {
        assetdefault: 0
    },
    {
        PLSahdow: 0
    },
    {
        score: 0
    },
    {
        popfin: 0
    },
    {
        Fade: 0
    },
    {
        puf: 0
    },
    {
        ptext: 0
    },
    {
        Tween: 0
    },
    {
        "9patch": 0
    },
    {
        sinedefault: 0
    },
    {
        Sc: 0
    },
    {
        TouchActive: 0
    },
    {
        Anchor: 0
    },
    {
        But_restart: 0
    },
    {
        But_menu: 0
    },
    {
        Sine: 0
    },
    {
        guide2default2: 0
    },
    {
        guide2default: 0
    },
    {
        guide2default3: 0
    },
    {
        guide2default4: 0
    },
    {
        HUDkey: 0
    },
    {
        HUDkey2: 0
    },
    {
        Touch: 0
    },
    {
        TiledBackground2: 0
    },
    {
        btnP2: 0
    },
    {
        btnP1: 0
    },
    {
        cc_title: 0
    },
    {
        cc_web: 0
    },
    {
        Logo: 0
    },
    {
        play: 0
    },
    {
        But_Sound: 0
    },
    {
        MoreGameBtn: 0
    },
    {
        Title: 0
    },
    {
        BG: 0
    },
    {
        Audio: 0
    },
    {
        LocalStorage: 0
    },
    {
        cc: 0
    },
    {
        Type: 0
    },
    {
        GUI: 0
    },
    {
        Popup: 0
    },
    {
        goals: 0
    },
    {
        buttonPop: 0
    },
    {
        p1skin: 0
    },
    {
        p2skin: 0
    },
    {
        Player: 0
    },
    {
        First: 0
    },
    {
        P1Score: 0
    },
    {
        P2Score: 0
    },
    {
        WinningScore: 0
    },
    {
        GameON: 0
    },
    {
        Ai_input: 0
    },
    {
        Speed: 0
    },
    {
        loc_input: 0
    },
    {
        Winner: 0
    },
    {
        Ads: 0
    },
    {
        adActive: 0
    },
    {
        adReward: 0
    },
    {
        GiveReward: 0
    },
    {
        canReward: 0
    },
    {
        linktxt: 0
    },
    {
        Sound: 0
    },
    {
        sntxt: 0
    },
    {
        linktxt2: 0
    },
    {
        Input: 0
    },
    {
        Year: 0
    }
];

self.InstanceType = {
    TiledBackground: class extends self.ITiledBackgroundInstance {},
    BGs: class extends self.ISpriteInstance {},
    player: class extends self.ISpriteInstance {},
    hand: class extends self.ISpriteInstance {},
    Ball: class extends self.ISpriteInstance {},
    Ball_parti: class extends self.ITiledBackgroundInstance {},
    BallSahdow: class extends self.ISpriteInstance {},
    Keyboard: class extends self.IInstance {},
    goal: class extends self.ISpriteInstance {},
    goal2: class extends self.ISpriteInstance {},
    aro_adelante_izqdefault: class extends self.ISpriteInstance {},
    aro_atrasdefault: class extends self.ISpriteInstance {},
    assetdefault: class extends self.ISpriteInstance {},
    PLSahdow: class extends self.ISpriteInstance {},
    score: class extends self.ITextInstance {},
    popfin: class extends self.ISpriteInstance {},
    puf: class extends self.ISpriteInstance {},
    ptext: class extends self.ISpriteInstance {},
    _9patch: class extends self.IWorldInstance {},
    sinedefault: class extends self.ISpriteInstance {},
    But_restart: class extends self.ISpriteInstance {},
    But_menu: class extends self.ISpriteInstance {},
    guide2default2: class extends self.ISpriteInstance {},
    guide2default: class extends self.ISpriteInstance {},
    guide2default3: class extends self.ISpriteInstance {},
    guide2default4: class extends self.ISpriteInstance {},
    HUDkey: class extends self.ISpriteInstance {},
    HUDkey2: class extends self.ISpriteInstance {},
    Touch: class extends self.IInstance {},
    TiledBackground2: class extends self.ITiledBackgroundInstance {},
    btnP2: class extends self.ISpriteInstance {},
    btnP1: class extends self.ISpriteInstance {},
    cc_title: class extends self.ITextInstance {},
    cc_web: class extends self.ITextInstance {},
    Logo: class extends self.ISpriteInstance {},
    play: class extends self.ISpriteInstance {},
    But_Sound: class extends self.ISpriteInstance {},
    MoreGameBtn: class extends self.ISpriteInstance {},
    Title: class extends self.ISpriteInstance {},
    BG: class extends self.ISpriteInstance {},
    Audio: class extends self.IInstance {},
    LocalStorage: class extends self.IInstance {},
    cc: class extends self.ITextInstance {},
    GUI: class extends self.ISpriteInstance {},
    Popup: class extends self.ISpriteInstance {},
    goals: class extends self.ISpriteInstance {},
    buttonPop: class extends self.ISpriteInstance {}
}