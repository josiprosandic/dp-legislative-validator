#!/usr/bin/env python3
import argparse
from pyxf.pyxf import flora2
import json

from flask import Flask, send_from_directory
app = Flask(__name__)


@app.route('/client.js')
def js():
    return send_from_directory('.', 'client.js')


@app.route('/')
def index():
    return send_from_directory('.', 'index.html')


@app.route('/query/<q>')
def query(q):
    return json.dumps(ask(q))


MUTEX = True


def ask(query):
    global FLORA2, MUTEX
    if MUTEX:
        MUTEX = False
        try:
            res = FLORA2.query(query)
        except Exception as e:
            res = str(e)
        MUTEX = True
    return res


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    # parser.add_argument("--dsn", const=True, nargs='?', type=str,help = "Specify ODBC DSN for database (e.g. defined in .odbc.ini). - DEFAULT: posluzitelj", default = "posluzitelj")
    # parser.add_argument("--usr", const=True, nargs='?', type=str,help="Specify ODBC DSN username. DEFAULT: foi", default="foi")
    # parser.add_argument("--passw", const=True, nargs='?', type=str,help="Specify ODBC DSN password. DEFAULT: vjezbe", default="vjezbe")
    parser.add_argument("--host", const=True, nargs='?', type=str,
                        help="Specify host for server to run on. DEFAULT: localhost", default="localhost")
    parser.add_argument("--port", const=True, nargs='?', type=int,
                        help="Specify port for server to run on. DEFAULT: 9876", default=9876)
    args = parser.parse_args()

    # "/home/foi/software/Flora-2/flora2/runflora"
    FLORA2 = flora2("/home/josip/software/Flora-2/flora2/runflora")

    loadModule = FLORA2.query('[lex].')
    if loadModule:
        pass
    else:
        raise Exception('Cannot load module')
    # pm = FLORA2.query('[persistentmodules>>pm]')
    # if pm:
    #    mod = FLORA2.query('[lex>>mod].')
    #    if mod:
    #        att = FLORA2.query(
    #            'mod[attach( %s,?_ , %s, %s )]@pm.' % (args.dsn, args.usr, args.passw))
    #    else:
    #        raise Exception('Cannot create module BazaZnanja!')
    # else:
    #    raise Exception('Cannot load persistent modules!')

    app.run(host=args.host, port=args.port)
