UI.AddDropdown( "Custom ClanTag", [ "Disabled", "Ne CSV"] );
UI.AddSliderInt( "Custom ClanTag Speed", 1, 10 );
var lasttime = 0;
function onRender( )
{
    var tag = UI.GetValue( "Script Items", "Custom ClanTag" );
    var speed = UI.GetValue( "Script Items", "Custom ClanTag Speed" );
    var time = parseInt((Globals.Curtime() * speed))
    if (time != lasttime)
    {
        if(tag == 0) { Local.SetClanTag(""); }
        if(tag == 1)
            {
            switch((time) % 25)
            {
            case 1: { Local.SetClanTag("                  "); break; }
            case 2: { Local.SetClanTag("             I "); break; }
            case 3: { Local.SetClanTag("            I a"); break; }
            case 4: { Local.SetClanTag("           I am"); break; }
            case 5: { Local.SetClanTag("          I am t"); break; }
            case 6: { Local.SetClanTag("         I am th"); break; }
            case 7: { Local.SetClanTag("        I am the"); break; }
            case 8: { Local.SetClanTag("       I am the "); break; }
            case 8: { Local.SetClanTag("      I am the b "); break; }
            case 8: { Local.SetClanTag("     I am the be "); break; }
            case 8: { Local.SetClanTag("    I am the bes  "); break; }
            case 9: { Local.SetClanTag("   I am the best   "); break; }
            case 10:{ Local.SetClanTag("  I am the best    "); break; }
            case 11:{ Local.SetClanTag(" I am the best     "); break; }
            case 12:{ Local.SetClanTag("I am the best      "); break; }
            case 13:{ Local.SetClanTag("I am the best      "); break; }
            case 14:{ Local.SetClanTag("I am the best      "); break; }
            case 15:{ Local.SetClanTag("I am the best      "); break; }
            case 16:{ Local.SetClanTag("I am the best       "); break; }
            case 17:{ Local.SetClanTag(" am the best        "); break; }
            case 18:{ Local.SetClanTag("am the best         "); break; }
            case 19:{ Local.SetClanTag("m the best          "); break; }
            case 20:{ Local.SetClanTag(" the best           "); break; }
            case 21:{ Local.SetClanTag("the best            "); break; }
            case 22:{ Local.SetClanTag("he best             "); break; }
            case 23:{ Local.SetClanTag("e best              "); break; }
            case 24:{ Local.SetClanTag(" best               "); break; }
            case 25:{ Local.SetClanTag("best               "); break; }
            case 26:{ Local.SetClanTag("est               "); break; }
            case 27:{ Local.SetClanTag("st               "); break; }
            case 28:{ Local.SetClanTag("t               "); break; }
            }
        }
    }
    lasttime = time;
}
Cheat.RegisterCallback("Draw", "onRender");
