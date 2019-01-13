
function getDataFromTable(){
    var conn = $.db.getConnection();
    var output = {results: [] };
    try {
        var pstmt = conn.prepareCall('CALL "SNET_PROJECT"."snet.database.procedures::GET_ALL_JOBS"()');
        pstmt.execute();
        var rs = pstmt.getResultSet();
        
        while (rs.next()) {
                var record = {};
                record.ID = rs.getString(1);
                record.MANAGER_ID = rs.getString(2);
                record.START_DATE = rs.getString(3);
                record.END_DATE = rs.getString(4);
                record.DESCRIPTION = rs.getString(5);
                record.VACANCY = rs.getString(6);
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




