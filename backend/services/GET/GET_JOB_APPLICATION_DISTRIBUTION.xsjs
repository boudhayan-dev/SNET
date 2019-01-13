
function getDataFromTable(){
    var conn = $.db.getConnection();
    var output = {results: [] };
    try {
        var pstmt = conn.prepareCall('CALL "SNET_PROJECT"."snet.database.procedures::JOB_APPLICATION_DISTRIBUTION"()');
        pstmt.execute();
        var rs = pstmt.getResultSet();
        
        while (rs.next()) {
                var record = {};
                record.JOB_ID = rs.getString(1);
                record.NUM_OF_SCHOLARS = rs.getString(2);
                output.results.push(record);
        }
        rs.close();
        pstmt.close();
        conn.close();
                }
    catch (e) {
        $.response.status = $.net.http.INTERNAL_SERVER_ERROR;
        $.response.setBody(e.message);
        return;
    }
    var body = JSON.stringify(output);
    $.response.contentType = 'application/json';
    $.response.setBody(body);
    $.response.status = $.net.http.OK;
}

getDataFromTable();




