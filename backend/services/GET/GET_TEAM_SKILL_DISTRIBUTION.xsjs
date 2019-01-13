
function getDataFromTable(){
    var conn = $.db.getConnection();
    var output = {results: [] };
    try {
        var pstmt = conn.prepareCall('CALL "SNET_PROJECT"."snet.database.procedures::TEAM_SKILL_DISTRIBUTION"(?)');
        pstmt.setString(1, $.request.parameters.get('SKILL_NAME'));
        pstmt.execute();
        var rs = pstmt.getResultSet();
        
        while (rs.next()) {
                var record = {};
                record.TEAM_NAME = rs.getString(1);
                record.STRENGTH = rs.getString(2);
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




