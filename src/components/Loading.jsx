import LoopTwoToneIcon from "@mui/icons-material/LoopTwoTone";

function Loading() {
  return (
    <div>
      <LoopTwoToneIcon
        sx={{
          fontSize: "50px",
          fontWeight: "500",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          animation: "spin 1s ease-in-out infinite",
          "@keyframes spin": {
            "0%": {
              transform: "translate(-50%, -50%) rotate(0deg)",
            },
            "100%": {
              transform: "translate(-50%, -50%) rotate(360deg)",
            },
          },
        }}
      />{" "}
    </div>
  );
}

export default Loading;
