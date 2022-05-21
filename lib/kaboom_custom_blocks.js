Blockly.Blocks['kaboom'] = {
  init: function() {
    this.appendValueInput("options")
        .setCheck("Object")
        .appendField("initialize Kaboom with settings");
    this.setInputsInline(false);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("Initialize kaboom context. The starting point of all kaboom games.");
 this.setHelpUrl("https://kaboomjs.com/#kaboom");
  }
};

Blockly.Blocks['add'] = {
  init: function() {
    this.appendValueInput("comps")
        .setCheck("Array")
        .appendField("create GameObj");
    this.setInputsInline(false);
    this.setOutput(true, "GameObj");
    this.setColour(90);
 this.setTooltip("Assemble a game object from a list of components, and add it to the game");
 this.setHelpUrl("https://kaboomjs.com/#add");
  }
};

Blockly.Blocks['get'] = {
  init: function() {
    this.appendValueInput("tag")
        .setCheck("String")
        .appendField("get a list of GameObjs with tag");
    this.setInputsInline(true);
    this.setOutput(true, "Array");
    this.setColour(90);
 this.setTooltip("Get a list of all game objs with certain tag.");
 this.setHelpUrl("https://kaboomjs.com/#get");
  }
};

Blockly.Blocks['every_tag'] = {
  init: function() {
    this.appendValueInput("tag")
        .setCheck("String")
        .appendField("on every GameObj with tag");
    this.appendStatementInput("action")
        .setCheck(null)
        .appendField("run")
        .appendField(new Blockly.FieldTextInput("obj"), "obj");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("Run callback on every game obj with certain tag.");
 this.setHelpUrl("https://kaboomjs.com/#every");
  }
};

Blockly.Blocks['every'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("on every GameObj");
    this.appendStatementInput("action")
        .setCheck(null)
        .appendField("run")
        .appendField(new Blockly.FieldTextInput("obj"), "obj");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("Run callback on every game obj.");
 this.setHelpUrl("https://kaboomjs.com/#every");
  }
};

Blockly.Blocks['revery'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("on every GameObj (reverse)");
    this.appendStatementInput("action")
        .setCheck(null)
        .appendField("run")
        .appendField(new Blockly.FieldTextInput("obj"), "obj");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("Run callback on every game obj in reverse order.");
 this.setHelpUrl("https://kaboomjs.com/#revery");
  }
};

Blockly.Blocks['revery_tag'] = {
  init: function() {
    this.appendValueInput("tag")
        .setCheck("String")
        .appendField("on every GameObj with tag");
    this.appendDummyInput()
        .appendField("(reverse)");
    this.appendStatementInput("action")
        .setCheck(null)
        .appendField("run")
        .appendField(new Blockly.FieldTextInput("obj"), "obj");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("Run callback on every game obj with certain tag in reverse order.");
 this.setHelpUrl("https://kaboomjs.com/#every");
  }
};

Blockly.Blocks['readd'] = {
  init: function() {
    this.appendValueInput("obj")
        .setCheck("GameObj")
        .appendField(new Blockly.FieldLabelSerializable("re-add GameObj"), "readd");
    this.setInputsInline(true);
    this.setOutput(true, "GameObj");
    this.setColour(90);
 this.setTooltip("Remove and re-add the game obj.");
 this.setHelpUrl("https://kaboomjs.com/#readd");
  }
};

Blockly.Blocks['destroy'] = {
  init: function() {
    this.appendValueInput("obj")
        .setCheck("GameObj")
        .appendField("destroy GameObj");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("Remove the game obj.");
 this.setHelpUrl("https://kaboomjs.com/#destroy");
  }
};

Blockly.Blocks['destroyall'] = {
  init: function() {
    this.appendValueInput("tag")
        .setCheck("String")
        .appendField("destroy all GameObjs with tag");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("Remove all game objs with certain tag.");
 this.setHelpUrl("https://kaboomjs.com/#destroyAll");
  }
};

Blockly.Blocks['pos'] = {
  init: function() {
    this.appendValueInput("p")
        .setCheck("Vec2")
        .appendField("with position");
    this.setInputsInline(true);
    this.setOutput(true, "PosComp");
    this.setColour(45);
 this.setTooltip("Position.");
 this.setHelpUrl("https://kaboomjs.com/#pos");
  }
};

Blockly.Blocks['scale'] = {
  init: function() {
    this.appendValueInput("s")
        .setCheck("Vec2")
        .appendField("with scale");
    this.setInputsInline(true);
    this.setOutput(true, "ScaleComp");
    this.setColour(45);
 this.setTooltip("Scale.");
 this.setHelpUrl("https://kaboomjs.com/#scale");
  }
};

Blockly.Blocks['rotate'] = {
  init: function() {
    this.appendValueInput("a")
        .setCheck("Number")
        .appendField("with angle");
    this.setInputsInline(true);
    this.setOutput(true, "RotateComp");
    this.setColour(45);
 this.setTooltip("Rotation (in degrees). (This doesn't work with the area() collider yet)");
 this.setHelpUrl("https://kaboomjs.com/#rotate");
  }
};

Blockly.Blocks['color'] = {
  init: function() {
    this.appendValueInput("c")
        .setCheck("Color")
        .appendField("with color");
    this.setInputsInline(true);
    this.setOutput(true, "ColorComp");
    this.setColour(45);
 this.setTooltip("Sets color (rgb 0-255).");
 this.setHelpUrl("https://kaboomjs.com/#color");
  }
};

Blockly.Blocks['opacity'] = {
  init: function() {
    this.appendValueInput("o")
        .setCheck("Number")
        .appendField("with opacity");
    this.setInputsInline(true);
    this.setOutput(true, "OpacityComp");
    this.setColour(45);
 this.setTooltip("Render as a sprite.");
 this.setHelpUrl("https://kaboomjs.com/#sprite");
  }
};

Blockly.Blocks['sprite'] = {
  init: function() {
    this.appendValueInput("spr")
        .setCheck("String")
        .appendField("as sprite");
    this.appendValueInput("options")
        .setCheck("Object")
        .appendField("with sprite options");
    this.setInputsInline(true);
    this.setOutput(true, "SpriteComp");
    this.setColour(45);
 this.setTooltip("Render as a sprite.");
 this.setHelpUrl("https://kaboomjs.com/#sprite");
  }
};

Blockly.Blocks['text_kaboom'] = {
  init: function() {
    this.appendValueInput("txt")
        .setCheck("String")
        .appendField("as text");
    this.appendValueInput("options")
        .setCheck("Object")
        .appendField("with text options");
    this.setInputsInline(true);
    this.setOutput(true, "TextComp");
    this.setColour(45);
 this.setTooltip("Render as text.");
 this.setHelpUrl("https://kaboomjs.com/#text");
  }
};

Blockly.Blocks['rect'] = {
  init: function() {
    this.appendValueInput("w")
        .setCheck("Number")
        .appendField("as rectangle with width");
    this.appendValueInput("h")
        .setCheck("Number")
        .appendField("and height");
    this.setInputsInline(true);
    this.setOutput(true, "RectComp");
    this.setColour(45);
 this.setTooltip("Render as a rectangle.");
 this.setHelpUrl("https://kaboomjs.com/#rect");
  }
};

Blockly.Blocks['circle'] = {
  init: function() {
    this.appendValueInput("radius")
        .setCheck("Number")
        .appendField("as circle with radius");
    this.setInputsInline(true);
    this.setOutput(true, "CircleComp");
    this.setColour(45);
 this.setTooltip("Render as a circle.");
 this.setHelpUrl("https://kaboomjs.com/#circle");
  }
};

Blockly.Blocks['uvquad'] = {
  init: function() {
    this.appendValueInput("w")
        .setCheck("Number")
        .appendField("as UV quad with width");
    this.appendValueInput("h")
        .setCheck("Number")
        .appendField("and height");
    this.setInputsInline(true);
    this.setOutput(true, "UVQuadComp");
    this.setColour(45);
 this.setTooltip("Render as a UV quad.");
 this.setHelpUrl("https://kaboomjs.com/#uvquad");
  }
};

Blockly.Blocks['area'] = {
  init: function() {
    this.appendValueInput("spr")
        .setCheck("Object")
        .appendField("with area that has options");
    this.setInputsInline(true);
    this.setOutput(true, "AreaComp");
    this.setColour(45);
 this.setTooltip("Define collider area and enables collision detection.");
 this.setHelpUrl("https://kaboomjs.com/#area");
  }
};

Blockly.Blocks['origin'] = {
  init: function() {
    this.appendValueInput("o")
        .setCheck(["String", "Vec2"])
        .appendField("with central point being");
    this.setInputsInline(true);
    this.setOutput(true, "OriginComp");
    this.setColour(45);
 this.setTooltip("Origin point for render (default \"topleft\").");
 this.setHelpUrl("https://kaboomjs.com/#origin");
  }
};

Blockly.Blocks['layer'] = {
  init: function() {
    this.appendValueInput("l")
        .setCheck("String")
        .appendField("on layer");
    this.setInputsInline(true);
    this.setOutput(true, "LayerComp");
    this.setColour(45);
 this.setTooltip("Which layer this object belongs to.");
 this.setHelpUrl("https://kaboomjs.com/#layer");
  }
};

Blockly.Blocks['z'] = {
  init: function() {
    this.appendValueInput("z")
        .setCheck("Number")
        .appendField("with z position of");
    this.setInputsInline(true);
    this.setOutput(true, "ZComp");
    this.setColour(45);
 this.setTooltip("Determines the draw order for objects on the same layer. Object will be drawn on top if z value is bigger.");
 this.setHelpUrl("https://kaboomjs.com/#z");
  }
};

Blockly.Blocks['outline'] = {
  init: function() {
    this.appendValueInput("width")
        .setCheck("Number")
        .appendField("with outline that has a width of");
    this.appendValueInput("color")
        .setCheck("Color")
        .appendField("and a color of");
    this.setInputsInline(true);
    this.setOutput(true, "OutlineComp");
    this.setColour(45);
 this.setTooltip("Give obj an outline.");
 this.setHelpUrl("https://kaboomjs.com/#outline");
  }
};

Blockly.Blocks['body'] = {
  init: function() {
    this.appendValueInput("options")
        .setCheck("Object")
        .appendField("with body that has options");
    this.setInputsInline(true);
    this.setOutput(true, "BodyComp");
    this.setColour(45);
 this.setTooltip("Physical body that responds to gravity. Requires \"area\" and \"pos\" comp. This also makes the object \"solid\".");
 this.setHelpUrl("https://kaboomjs.com/#body");
  }
};

Blockly.Blocks['solid'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("that is solid");
    this.setInputsInline(true);
    this.setOutput(true, "SolidComp");
    this.setColour(45);
 this.setTooltip("Make other objects cannot move pass. Requires \"area\" comp.");
 this.setHelpUrl("https://kaboomjs.com/#solid");
  }
};

Blockly.Blocks['move'] = {
  init: function() {
    this.appendValueInput("direction")
        .setCheck(["Number", "Vec2"])
        .appendField("that constantly moves in the direction of");
    this.appendValueInput("speed")
        .setCheck("Number")
        .appendField("at speed");
    this.setInputsInline(true);
    this.setOutput(true, "MoveComp");
    this.setColour(45);
 this.setTooltip("Move towards a direction infinitely, and destroys when it leaves game view. Requires \"pos\" comp.");
 this.setHelpUrl("https://kaboomjs.com/#move");
  }
};

Blockly.Blocks['outview'] = {
  init: function() {
    this.appendValueInput("opt")
        .setCheck("Object")
        .appendField("that when it goes out of view, it");
    this.setInputsInline(true);
    this.setOutput(true, "OutviewComp");
    this.setColour(45);
 this.setTooltip("Control the behavior of object when it goes out of view.");
 this.setHelpUrl("https://kaboomjs.com/#outview");
  }
};

Blockly.Blocks['cleanup'] = {
  init: function() {
    this.appendValueInput("opt")
        .setCheck("Object")
        .appendField("that is trapped, with options");
    this.setInputsInline(true);
    this.setOutput(true, "CleanupComp");
    this.setColour(45);
 this.setTooltip("destroy() the object if it goes out of screen. Optionally specify the amount of time it has to be off-screen before removal.");
 this.setHelpUrl("https://kaboomjs.com/#cleanup");
  }
};

Blockly.Blocks['follow'] = {
  init: function() {
    this.appendValueInput("obj")
        .setCheck("GameObj")
        .appendField("that follows");
    this.appendValueInput("offset")
        .setCheck("Vec2")
        .appendField("with an offset");
    this.setInputsInline(true);
    this.setOutput(true, "FollowComp");
    this.setColour(45);
 this.setTooltip("Follow another game obj's position.");
 this.setHelpUrl("https://kaboomjs.com/#follow");
  }
};

Blockly.Blocks['shader'] = {
  init: function() {
    this.appendValueInput("id")
        .setCheck("String")
        .appendField("with shader");
    this.setInputsInline(true);
    this.setOutput(true, "ShaderComp");
    this.setColour(45);
 this.setTooltip("Custom shader.");
 this.setHelpUrl("https://kaboomjs.com/#shader");
  }
};

Blockly.Blocks['timer'] = {
  init: function() {
    this.appendValueInput("n")
        .setCheck("Number")
        .appendField("with a timer of length");
    this.appendStatementInput("action")
        .setCheck(null)
        .appendField("that runs");
    this.setInputsInline(true);
    this.setOutput(true, "TimerComp");
    this.setColour(45);
 this.setTooltip("Run certain action after some time.");
 this.setHelpUrl("https://kaboomjs.com/#timer");
  }
};

Blockly.Blocks['fixed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("that is bolted to parent");
    this.setInputsInline(true);
    this.setOutput(true, "FixedComp");
    this.setColour(45);
 this.setTooltip("Make object unaffected by camera or parent object transforms, and render at last.");
 this.setHelpUrl("https://kaboomjs.com/#fixed");
  }
};

Blockly.Blocks['stay'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("that is persistent");
    this.setInputsInline(true);
    this.setOutput(true, "StayComp");
    this.setColour(45);
 this.setTooltip("Don't get destroyed on scene switch.");
 this.setHelpUrl("https://kaboomjs.com/#stay");
  }
};

Blockly.Blocks['health'] = {
  init: function() {
    this.appendValueInput("hp")
        .setCheck("Number")
        .appendField("with health");
    this.setInputsInline(true);
    this.setOutput(true, "HealthComp");
    this.setColour(45);
 this.setTooltip("Handles health related logic and events.");
 this.setHelpUrl("https://kaboomjs.com/#health");
  }
};

Blockly.Blocks['lifespan'] = {
  init: function() {
    this.appendValueInput("time")
        .setCheck("Number")
        .appendField("that lives for");
    this.appendValueInput("options")
        .setCheck("Object")
        .appendField("with options");
    this.setInputsInline(true);
    this.setOutput(true, "LifespanComp");
    this.setColour(45);
 this.setTooltip("Destroy the game obj after certain amount of time");
 this.setHelpUrl("https://kaboomjs.com/#lifespan");
  }
};

Blockly.Blocks['state'] = {
  init: function() {
    this.appendValueInput("initialState")
        .setCheck("String")
        .appendField("with states, that begins on state");
    this.appendValueInput("options")
        .setCheck("Array")
        .appendField("out of states");
    this.setInputsInline(true);
    this.setOutput(true, "StateComp");
    this.setColour(45);
 this.setTooltip("Finite state machine.");
 this.setHelpUrl("https://kaboomjs.com/#state");
  }
};

Blockly.Blocks['object'] = {
  init: function() {
    this.appendValueInput("value")
        .setCheck("Array")
        .appendField("JSON Object {");
    this.appendDummyInput()
        .appendField("}");
    this.setInputsInline(false);
    this.setOutput(true, "Object");
    this.setColour(225);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['array'] = {
  init: function() {
    this.appendValueInput("value")
        .setCheck("Array")
        .appendField("JSON Array [");
    this.appendDummyInput()
        .appendField("]");
    this.setInputsInline(false);
    this.setOutput(true, "Array");
    this.setColour(225);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['objectitem'] = {
  init: function() {
    this.appendValueInput("value")
        .setCheck(null)
        .appendField(new Blockly.FieldTextInput("name"), "name")
        .appendField(":");
    this.setOutput(true, null);
    this.setColour(225);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['more'] = {
  init: function() {
    this.appendValueInput("v1")
        .setCheck(null);
    this.appendValueInput("v2")
        .setCheck(null)
        .appendField(",");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(225);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['runner'] = {
  init: function() {
    this.appendValueInput("run")
        .setCheck(null)
        .appendField("anonymize");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("This is like setting a variable, but instead of taking a variable space, it simply trashes the link after definition.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['customvariable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("variable name"), "value");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};