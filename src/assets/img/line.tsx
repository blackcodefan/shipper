import { FC } from "react";

interface Props {
  width?: number;
}

const LineImage: FC<Props> = ({ width }) => (
  <svg
    width={width ? width : 506}
    height="68"
    viewBox="0 0 506 68"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="506" height="68" fill="url(#pattern0)" />
    <defs>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          href="#image0_520:849"
          transform="translate(0 -0.0506471) scale(0.002 0.0148824)"
        />
      </pattern>
      <image
        id="image0_520:849"
        width="500"
        height="74"
        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAABKCAYAAABNYaY7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAIh2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMS0wOS0zMFQwMjozNDo0NiswMjowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0wOS0zMFQwMjozNDo1MyswMjowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjEtMDktMzBUMDI6MzQ6NTMrMDI6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVjYTI0MzQ4LTY0NDYtZGM0YS1hNjJhLTgzZGEwNGY0ZWRkYyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjVjYmE4NTg4LTRiMmItMTg0Yy04ODM4LTEwYmQ0ZGI4MjhmMCIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjllZWQ2MTVjLTc3ZGYtOWM0YS04ZTY5LTAyYTExOGY2NTE1ZiIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OWVlZDYxNWMtNzdkZi05YzRhLThlNjktMDJhMTE4ZjY1MTVmIiBzdEV2dDp3aGVuPSIyMDIxLTA5LTMwVDAyOjM0OjQ2KzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjA4MWY1NWIxLTA3M2UtNGI0OC1hNWNjLWQ3MTEwNDBhYzJmZCIgc3RFdnQ6d2hlbj0iMjAyMS0wOS0zMFQwMjozNDo1MyswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1Y2EyNDM0OC02NDQ2LWRj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"
      />
    </defs>
  </svg>
);

export default LineImage;
