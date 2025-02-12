// Author: @hedonicadapter
//
//  Description:

module.exports = {
  params: {
    designator: "DISP",
    side: "F",
    GND: { type: "net", value: "GND" },
    MISO: { type: "net", value: "P16" },
    SCLK: { type: "net", value: "P2" },
    MOSI: { type: "net", value: "P3" },
    CS: { type: "net", value: "P5" },
    VCC: { type: "net", value: "VCC" },
  },
  body: (p) => `
      (footprint "charybdis-SPI" (version 20240108) (generator "pcbnew") (generator_version "8.0")
        (layer "F.Cu")
        (descr "Through hole straight pin header, 1x06, 2.54mm pitch, single row")
        (tags "Through hole pin header THT 1x06 2.54mm single row")
        (property "Reference" "SPI" (at 0 -2.33 ${0 + p.rot}) (layer ${p.side}.SilkS)(hide yes)
      (uuid "b90f2edd-7bbb-46cc-903e-fec9255fbe6e")
          (effects (font (size 1 1) (thickness 0.15)))
        )
        (property "Value" "trackball" (at 0 15.03 ${0 + p.rot}) (layer "F.Fab")(uuid "0135808a-6773-4a6b-9f78-ba1abaf220b8")
          (effects (font (size 1 1) (thickness 0.15)))
        )
        (property "Footprint" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab")(hide yes)
      (uuid "d8afee3e-1bcd-4b7b-8b6b-5e7b095a6797")
          (effects (font (size 1.27 1.27) (thickness 0.15)))
        )
        (property "Datasheet" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab")(hide yes)
      (uuid "89a090bc-b813-41e9-aa85-b36c4f54038f")
          (effects (font (size 1.27 1.27) (thickness 0.15)))
        )
        (property "Description" "Generic connector, single row, 01x06, script generated (kicad-library-utils/schlib/autogen/connector/)" (at 0 0 ${0 + p.rot}) (layer "F.Fab")(hide yes)
      (uuid "9498f0e6-52e3-4f4f-a095-1f4456773db5")
          (effects (font (size 1.27 1.27) (thickness 0.15)))
        )
        (attr through_hole)
        (fp_rect (start -1.31 -1.31) (end 1.29 14)
          (stroke (width 0.15) (type solid)) (fill none) (layer "B.SilkS")(uuid "d5128c15-d879-4af3-912b-ea41aa9eacb1"))
        (fp_rect (start -1.31 -1.31) (end 1.29 14)
          (stroke (width 0.15) (type solid)) (fill none) (layer ${p.side}.SilkS)(uuid "48c10958-6d60-4164-87dd-5a1b523f83bd"))
        (fp_line (start -1.8 -1.8) (end -1.8 14.5)
          (stroke (width 0.05) (type solid)) (layer "F.CrtYd")(uuid "dce030fe-44b6-459c-9f8e-4222cde3fe15"))
        (fp_line (start -1.8 14.5) (end 1.8 14.5)
          (stroke (width 0.05) (type solid)) (layer "F.CrtYd")(uuid "78aca548-8916-4e93-8a16-3c61bdaf185e"))
        (fp_line (start 1.8 -1.8) (end -1.8 -1.8)
          (stroke (width 0.05) (type solid)) (layer "F.CrtYd")(uuid "3ca00755-6bb4-43ac-9e1c-67050ae87811"))
        (fp_line (start 1.8 14.5) (end 1.8 -1.8)
          (stroke (width 0.05) (type solid)) (layer "F.CrtYd")(uuid "2320839d-0a9e-4f37-a9c5-e22c7c4f6376"))
        (fp_line (start -1.27 -0.635) (end -0.635 -1.27)
          (stroke (width 0.1) (type solid)) (layer "F.Fab")(uuid "ce5b79d2-08e3-4c3e-b78a-e4c096402840"))
        (fp_line (start -1.27 13.97) (end -1.27 -0.635)
          (stroke (width 0.1) (type solid)) (layer "F.Fab")(uuid "a7ea4a96-6b14-40b9-a050-678dbbe515c8"))
        (fp_line (start -0.635 -1.27) (end 1.27 -1.27)
          (stroke (width 0.1) (type solid)) (layer "F.Fab")(uuid "a81298dc-2204-4be6-82b3-22aff25357ce"))
        (fp_line (start 1.27 -1.27) (end 1.27 13.97)
          (stroke (width 0.1) (type solid)) (layer "F.Fab")(uuid "03b6c245-988e-4748-9c5a-8a511a71cfe4"))
        (fp_line (start 1.27 13.97) (end -1.27 13.97)
          (stroke (width 0.1) (type solid)) (layer "F.Fab")(uuid "2238dd10-67db-4f42-990a-ee37c7271082"))
        (fp_text user "MOSI" (at -2.959594 4.96 ${45 + p.rot})(unlocked yes)
       (layer ${p.side}.SilkS)(uuid "1c29682f-76f7-47aa-a094-1dc2d8d425c1")
          (effects (font (size 0.8 0.8) (thickness 0.15)))
        )
        (fp_text user "SCLK" (at -3 7.5 ${45 + p.rot})(unlocked yes)
       (layer ${p.side}.SilkS)(uuid "793f6d90-440c-4855-9c82-d3508565e26b")
          (effects (font (size 0.8 0.8) (thickness 0.15)))
        )
        (fp_text user "GND" (at -2.79797 12.580001 ${45 + p.rot})(unlocked yes)
       (layer ${p.side}.SilkS)(uuid "c5f9fc4d-eb14-474c-baa0-127665a17f83")
          (effects (font (size 0.8 0.8) (thickness 0.15)))
        )
        (fp_text user "MISO" (at -2.959594 10.04 ${45 + p.rot})(unlocked yes)
       (layer ${p.side}.SilkS)(uuid "ecb2c365-594b-4059-b723-0c4ec03173f6")
          (effects (font (size 0.8 0.8) (thickness 0.15)))
        )
        (fp_text user "VCC" (at -2.881194 -0.119999 ${45 + p.rot})(unlocked yes)
       (layer ${p.side}.SilkS)(uuid "f3d2dfe5-09ee-4321-a672-5cd7e5cc1745")
          (effects (font (size 0.8 0.8) (thickness 0.15)))
        )
        (fp_text user "CS" (at -2.48819 2.420001 ${45 + p.rot})(unlocked yes)
       (layer ${p.side}.SilkS)(uuid "f87fe1b6-9c3c-4abd-806c-1c7c6d04b714")
          (effects (font (size 0.8 0.8) (thickness 0.15)))
        )
        (fp_text user "${p.ref}" (at 0 6.35 ${90 + p.rot}) (layer "F.Fab")(hide yes)
      (uuid "c5a07480-d961-4f30-b68f-5ce772e6aee2")
          (effects (font (size 1 1) (thickness 0.15)))
        )
        (pad "1" thru_hole rect (at 0 0) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask")(remove_unused_layers no)

      (uuid "ed10764b-6d1a-4adf-a2bc-305b47024532")
         ${p.VCC.str}
        )
        (pad "2" thru_hole oval (at 0 2.54) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask")(remove_unused_layers no)

      (uuid "6787d411-5651-4f49-87f8-2696786394fc")
         ${p.CS.str}
        )
        (pad "3" thru_hole oval (at 0 5.08) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask")(remove_unused_layers no)

      (uuid "4c9073f0-9220-4990-bf92-8428d01bfdd2")
         ${p.MOSI.str}
        )
        (pad "4" thru_hole oval (at 0 7.62) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask")(remove_unused_layers no)

      (uuid "49afca7f-14ea-4f80-ae2b-0381f1358e11")
         ${p.SCLK.str}
        )
        (pad "5" thru_hole oval (at 0 10.16) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask")(remove_unused_layers no)

      (uuid "430995dd-b742-4b9d-ac8e-4c484acad46d")
         ${p.MISO.str}
        )
        (pad "6" thru_hole oval (at 0 12.7) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask")(remove_unused_layers no)

      (uuid "37f6a6a2-6808-47b3-8316-d33943eee6a0")
         ${p.GND.str}
        )
        ${p.at /* parametric position */}
      )
  `,
};
