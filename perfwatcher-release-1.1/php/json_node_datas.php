<?php # vim: set filetype=php fdm=marker sw=4 ts=4 tw=78 et : 
/**
 *
 * PHP version 5
 *
 * LICENSE: This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @category  Monitoring
 * @author    Cyril Feraudet <cyril@feraudet.com>
 * @copyright 2011 Cyril Feraudet
 * @license   http://www.gnu.org/copyleft/lesser.html  LGPL License 2.1
 * @link      http://www.perfwatcher.org/
 */ 

header("HTTP/1.0 200 OK");
header('Content-type: text/json; charset=utf-8');
header("Cache-Control: no-cache, must-revalidate");
header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
header("Pragma: no-cache");

if (!isset($_GET['id']) and !isset($_POST['id'])) {
    die('Error : POST or GET id missing !!');
}

if (isset($_GET['id']) && is_numeric($_GET['id'])) {
    $id = $_GET['id'];
} elseif (isset($_POST['id']) && is_numeric($_POST['id'])) {
    $id = $_POST['id'];
} else {
    die('Error : No valid id found !!!');
}

$jstree = new json_tree();
$res = $jstree->_get_node($id);

switch ($res['type']) {
    case 'default' :
        $host = $res['title'];
        break;
    case 'folder' :
    case 'drive' :
        $host = 'aggregator_'.$res['id'];
        break;
    default:
        die('Error : node not found !!!');
        break;
}

$plugins = load_datas($host);
$datas = $jstree->get_datas($res['id']);

if (isset($datas['tabs']) && is_array($datas['tabs']) && count($datas['tabs']) > 0) {
    foreach($datas['tabs'] as $key => $val) {
        if (isset($val['deleteafter']) && time() > $val['deleteafter']) {
            unset($datas['tabs'][$key]);
        }
    }
}

echo json_encode(
        array(
            'host' => $host,
            'plugins' => $plugins,
            'jstree' => $res,
            'datas' => $datas,
            'config' => array(
                'widgets' => get_widget($res)
                )
            ));
?>
