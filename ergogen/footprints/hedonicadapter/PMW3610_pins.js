// Author: @hedonicadapter
//
// Description:
// Untested PCB footprint for for PMW3610 in accordance to badjeff's breakout. Usually used for mousing on wireless applications (due to low power usage).
//
// For more information please see https://github.com/badjeff/pmw3610-pcb

module.exports = {
  params: {
    designator: "DISP",
    side: "F",
    VIN: { type: "net", value: "VCC" },
    GND: { type: "net", value: "GND" },
    SCLK: { type: "net", value: "" }, // any high freq GPIO (D1-D7 on n!n v2)
    SDIO: { type: "net", value: "" },  // any high freq GPIO (D1-D7 on n!n v2)
    nCS: { type: "net", value: "" }, // any GPIO
    MOTION: { type: "net", value: "" }, // Any IRQ-gpios
  },
  body: (p) => `
    (footprint "pmw3610_pins"
      (version 20240108)
      (generator "pcbnew")
      (generator_version "8.0")
      (layer "F.Cu")
      (property "Reference" "REF**"
        (at 0 -0.5 0)
        (unlocked yes)
        (layer "F.SilkS")
        (uuid "011f35f7-3c32-4858-adef-02c52caa2088")
        (effects
          (font
            (size 1 1)
            (thickness 0.1)
          )
        )
      )
      (property "Value" "pmw3610_pins"
        (at 0 1 0)
        (unlocked yes)
        (layer "F.Fab")
        (uuid "8a998ac7-4516-4450-9d0a-f3039ef548c2")
        (effects
          (font
            (size 1 1)
            (thickness 0.15)
          )
        )
      )
      (property "Footprint" ""
        (at 0 0 0)
        (unlocked yes)
        (layer "F.Fab")
        (hide yes)
        (uuid "b9cd1eab-b7ba-49eb-a974-5340bc4f9ee4")
        (effects
          (font
            (size 1 1)
            (thickness 0.15)
          )
        )
      )
      (property "Datasheet" ""
        (at 0 0 0)
        (unlocked yes)
        (layer "F.Fab")
        (hide yes)
        (uuid "ca464a65-5328-4bf3-af02-e7149fca8544")
        (effects
          (font
            (size 1 1)
            (thickness 0.15)
          )
        )
      )
      (property "Description" ""
        (at 0 0 0)
        (unlocked yes)
        (layer "F.Fab")
        (hide yes)
        (uuid "aaf62bd7-b53a-4a0b-aaf1-15488e252f80")
        (effects
          (font
            (size 1 1)
            (thickness 0.15)
          )
        )
      )
      (attr through_hole)
      (fp_text user "chungus"
        (at 0 2.5 0)
        (unlocked yes)
        (layer "F.Fab")
        (uuid "baa5d797-02e5-4caa-913f-652b4137ce8d")
        (effects
          (font
            (size 1 1)
            (thickness 0.15)
          )
        )
      )
      (pad "GND" thru_hole oval
        (at -3 0 180)
        (size 1.7 1.7)
        (drill 1)
        (layers "*.Cu" "*.Mask")
        (remove_unused_layers no)
        (uuid "ccdc3752-d186-43fa-a84a-5d1215106641")
        ${p.GND.str}
      )
      (pad "MOTION" thru_hole rect
        (at 5 0 270)
        (size 1.7 1.7)
        (drill 1)
        (layers "*.Cu" "*.Mask")
        (remove_unused_layers no)
        (uuid "b5f96665-572c-44a7-8b90-8f5f679031a3")
        ${p.MOTION.str}
      )
      (pad "SCLK" thru_hole oval
        (at -1 0 270)
        (size 1.7 1.7)
        (drill 1)
        (layers "*.Cu" "*.Mask")
        (remove_unused_layers no)
        (uuid "04205c7c-cfbe-4a74-a1b6-164441b3a422")
        ${p.SCLK.str}
      )
      (pad "SDIO" thru_hole oval
        (at 1 0 270)
        (size 1.7 1.7)
        (drill 1)
        (layers "*.Cu" "*.Mask")
        (remove_unused_layers no)
        (uuid "e44726ad-7e6c-45b9-9893-91dedf658b97")
        ${p.SDIO.str}
      )
      (pad "VIN" thru_hole rect
        (at -5 0 180)
        (size 1.7 1.7)
        (drill 1)
        (layers "*.Cu" "*.Mask")
        (remove_unused_layers no)
        (uuid "d58a99fa-6924-48e0-afe0-cf3ba567cd25")
        ${p.VIN.str}
      )
      (pad "nCS" thru_hole oval
        (at 3 0 270)
        (size 1.7 1.7)
        (drill 1)
        (layers "*.Cu" "*.Mask")
        (remove_unused_layers no)
        (uuid "d24f5ce0-8be3-4182-9a8e-34bb0dad26e8")
        ${p.nCS.str}
      )
    )
  `,
};
