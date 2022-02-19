let imgElement = document.getElementById('scheda');

generate = function () {
    console.debug("loading imgElement");
    let mat = cv.imread(imgElement);
    let w = imgElement.width;
    let h = imgElement.width;
    cv.putText(mat, document.getElementById("team_captain").value, new cv.Point(0.65 * w, 0.08 * h), cv.FONT_HERSHEY_SIMPLEX, 0.5, new cv.Scalar(0, 0, 0, 255), 2, cv.LINE_4);

    cv.putText(mat, document.getElementById("team_member1").value, new cv.Point(0.1 * w, 0.18 * h), cv.FONT_HERSHEY_SIMPLEX, 0.5, new cv.Scalar(0, 0, 0, 255), 1);
    cv.putText(mat, document.getElementById("team_member2").value, new cv.Point(0.4 * w, 0.18 * h), cv.FONT_HERSHEY_SIMPLEX, 0.5, new cv.Scalar(0, 0, 0, 255), 1);
    cv.putText(mat, document.getElementById("team_member3").value, new cv.Point(0.7 * w, 0.18 * h), cv.FONT_HERSHEY_SIMPLEX, 0.5, new cv.Scalar(0, 0, 0, 255), 1);

    cv.putText(mat, document.getElementById("team_member4").value, new cv.Point(0.1 * w, 0.27 * h), cv.FONT_HERSHEY_SIMPLEX, 0.5, new cv.Scalar(0, 0, 0, 255), 1);
    cv.putText(mat, document.getElementById("team_member5").value, new cv.Point(0.4 * w, 0.27 * h), cv.FONT_HERSHEY_SIMPLEX, 0.5, new cv.Scalar(0, 0, 0, 255), 1);
    cv.putText(mat, document.getElementById("team_member6").value, new cv.Point(0.7 * w, 0.27 * h), cv.FONT_HERSHEY_SIMPLEX, 0.5, new cv.Scalar(0, 0, 0, 255), 1);

    cv.putText(mat, document.getElementById("team_member7").value, new cv.Point(0.1 * w, 0.36 * h), cv.FONT_HERSHEY_SIMPLEX, 0.5, new cv.Scalar(0, 0, 0, 255), 1);
    cv.putText(mat, document.getElementById("team_member8").value, new cv.Point(0.4 * w, 0.36 * h), cv.FONT_HERSHEY_SIMPLEX, 0.5, new cv.Scalar(0, 0, 0, 255), 1);
    cv.putText(mat, document.getElementById("team_member9").value, new cv.Point(0.7 * w, 0.36 * h), cv.FONT_HERSHEY_SIMPLEX, 0.5, new cv.Scalar(0, 0, 0, 255), 1);

    cv.putText(mat, document.getElementById("team_member10").value, new cv.Point(0.1 * w, 0.45 * h), cv.FONT_HERSHEY_SIMPLEX, 0.5, new cv.Scalar(0, 0, 0, 255), 1);
    cv.putText(mat, document.getElementById("team_member11").value, new cv.Point(0.4 * w, 0.45 * h), cv.FONT_HERSHEY_SIMPLEX, 0.5, new cv.Scalar(0, 0, 0, 255), 1);

    cv.putText(mat, document.getElementById("team_name").value, new cv.Point(0.7 * w, 0.47 * h), cv.FONT_HERSHEY_SIMPLEX, 0.5, new cv.Scalar(0, 0, 0, 255), 2, cv.LINE_4);

    cv.imshow('outputCanvas', mat);
    imgElement.hidden = true;
    mat.delete();
};

function download() {
    var download = document.getElementById("download");
    var image = document.getElementById("outputCanvas").toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
    download.setAttribute("href", image);
}