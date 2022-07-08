const ColorBlock = "#2ECC71";

//==============MPU==============

Blockly.Blocks['mpu_init'] = {
  init: function() {
    this.jsonInit(
      {
        type: "mpu_init",
        message0: "đặt lại cảm biến gia tốc góc MPU6050",
        previousStatement: null,
        nextStatement: null,
        args0: [],
        colour: ColorBlock,
        tooltip: "đặt lại cảm biến gia tốc góc MPU6050",
        helpUrl: ""
      }
    );
  }
};

Blockly.Python['mpu_init'] = function(block) {
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  Blockly.Python.definitions_['import_mpu6050'] = 'from motion import *';
  var code = 'motion.begin()\n';
  return code;
};

Blockly.Blocks["mpu_get_accel"] = {
  init: function () {
    this.jsonInit({
      colour: ColorBlock,
      tooltip: "",
      message0: "đọc cảm biến gia tốc %1",
      args0: [
        {
          type: "field_dropdown",
          name: "accel",
          options: [
            ["x", "x"],
            ["y", "y"],
            ["z", "z"],
          ],
        }
      ],
      output: "Number",
      helpUrl: ""
    });
  },
};

Blockly.Blocks["mpu_get_gyro"] = {
  init: function () {
    this.jsonInit({
      colour: ColorBlock,
      tooltip: "",
      message0: "đọc cảm biến gyroscope %1",
      args0: [
        {
          type: "field_dropdown",
          name: "gyro",
          options: [
            ["roll", "roll"],
            ["pitch", "pitch"],
            ["yaw", "yaw"],
          ]
        }
      ],
      output: "Number",
      helpUrl: ""
    });
  },
};

Blockly.Blocks["mpu_is_shake"] = {
  init: function () {
    this.jsonInit({
      colour: ColorBlock,
      tooltip: "",
      message0: "cảm biến bị rung",
      args0: [],
      output: "Boolean",
      helpUrl: ""
    });
  },
};

//==============MPU==============
Blockly.Python["mpu_get_accel"] = function (block) {
  var accel = block.getFieldValue("accel");
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  Blockly.Python.definitions_['import_mpu6050'] = 'from motion import *';
  // TODO: Assemble Python into code variable.
  var code = "motion.get_accel('" + accel + "')";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["mpu_get_gyro"] = function (block) {
  var gyro = block.getFieldValue("gyro");
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  Blockly.Python.definitions_['import_mpu6050'] = 'from motion import *';
  // TODO: Assemble Python into code variable.
  var code = "motion.get_gyro_"+ gyro +"()";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["mpu_is_shake"] = function (block) {
  var gyro = block.getFieldValue("gyro");
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  Blockly.Python.definitions_['import_mpu6050'] = 'from motion import *';
  // TODO: Assemble Python into code variable.
  var code = "motion.is_shaked()";
  return [code, Blockly.Python.ORDER_NONE];
};